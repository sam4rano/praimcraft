# 🔥 URGENT: Fix Blog 404 on Vercel

## The Problem
Build found 1 blog post locally, but getting 404 on Vercel = **Environment Variable Issue**

## ✅ IMMEDIATE FIX

### Step 1: Push Changes
```bash
git push origin main
```

### Step 2: Check These EXACT URLs After Deploy

1. **API Test (Most Important):** `https://your-domain.vercel.app/api/sanity-test`
   - This will show you EXACTLY what's wrong
   - Shows: posts found, environment vars, error messages

2. **Blog Debug:** `https://your-domain.vercel.app/blog-debug`
   - Lists all blog posts from Sanity
   - Shows environment configuration

3. **Try a Blog Post:** `https://your-domain.vercel.app/blog/[your-slug]`
   - Replace [your-slug] with actual post slug from API test

## 🔧 Most Likely Fix: Environment Variables

### Go to Vercel Dashboard:
1. Click your project
2. Go to **Settings** → **Environment Variables**
3. Add these EXACTLY (for **Production**, **Preview**, AND **Development**):

```
NEXT_PUBLIC_SANITY_PROJECT_ID = a9x04if7
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-10-18
SANITY_API_TOKEN = [your-token-from-sanity]
```

### Get Sanity API Token:
1. Go to https://www.sanity.io/manage
2. Select your project (praimcraft / a9x04if7)
3. Go to **API** → **Tokens**
4. Create a token with **Viewer** or **Editor** permissions
5. Copy the token
6. Add it to Vercel as `SANITY_API_TOKEN`

### Step 3: Redeploy
After adding env vars, **you MUST redeploy**:
- Option A: Push any small change (even a space in README)
- Option B: In Vercel dashboard → Deployments → Click "..." → "Redeploy"

## 🎯 What the API Test Will Tell You

### If you see: `"postsCount": 0`
**Problem:** Sanity has no published posts OR env vars are wrong
**Fix:** 
- Check env vars in Vercel
- Go to Sanity Studio and publish a blog post

### If you see: `"postsCount": 1` or more
**Problem:** Dynamic routing issue (now fixed with `force-dynamic`)
**Fix:** Already applied, just wait for deployment

### If you see: `"success": false` with an error
**Problem:** Sanity connection failing
**Fix:** Check the error message - likely API token or project ID wrong

## 🚨 Critical Checklist

- [ ] Push changes to GitHub
- [ ] Verify all 4 env vars in Vercel (for all 3 environments)
- [ ] Redeploy after adding env vars
- [ ] Visit `/api/sanity-test` to diagnose
- [ ] Check that blog post is **PUBLISHED** in Sanity (not draft)
- [ ] Clear browser cache before testing

## 📱 Quick Test Command

After deployment, run this in your terminal:
```bash
curl https://your-domain.vercel.app/api/sanity-test
```

This will show you exactly what Vercel sees.

## 💡 Why This Happens

Next.js 15 with App Router requires:
1. `dynamicParams = true` - ✅ Added
2. `dynamic = 'force-dynamic'` - ✅ Added
3. Environment variables on Vercel - ⚠️ CHECK THIS
4. Published posts in Sanity - ⚠️ CHECK THIS

The local build works because you have `.env.local` file.
Vercel needs the same variables in its dashboard.

