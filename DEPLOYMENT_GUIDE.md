# 404 Blog Issue - Debugging & Deployment Guide

## Step 1: Push to GitHub

```bash
git push origin main
```

If authentication fails, use GitHub CLI or authenticate manually.

## Step 2: Verify Environment Variables on Vercel

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

**Required Variables:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `a9x04if7`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-10-18`
- `SANITY_API_TOKEN` = (your token from Sanity)

## Step 3: Test Diagnostic Pages After Deployment

Visit these URLs in order:

1. **Basic Test:** `https://your-domain.vercel.app/simple`
   - Tests basic Next.js routing
   - Should show "Simple Test Page"

2. **Blog Debug:** `https://your-domain.vercel.app/blog-debug`
   - **MOST IMPORTANT PAGE**
   - Shows all blog posts from Sanity
   - Displays environment configuration
   - Will tell you exactly what's wrong

3. **Sanity Connection:** `https://your-domain.vercel.app/safe-home`
   - Tests Sanity data fetching
   - Should show featured posts

4. **Blog List:** `https://your-domain.vercel.app/blog`
   - Should show all blog posts
   - Click any post to test individual pages

## Step 4: Interpret Blog Debug Results

### If /blog-debug shows "No blog posts found":
**Problem:** No published blog posts in Sanity
**Solution:**
1. Go to https://your-domain.vercel.app/studio
2. Create a blog post
3. Fill in required fields (title, slug, author, published date)
4. **Click "Publish"** (not just Save)
5. Refresh /blog-debug page

### If /blog-debug shows an error message:
**Problem:** Sanity connection issue
**Solutions:**
- Check environment variables in Vercel dashboard
- Verify Sanity project ID is correct
- Check if Sanity dataset is "production"
- Verify API token has read permissions

### If /blog-debug shows blog posts but /blog/[slug] gives 404:
**Problem:** Dynamic routing issue
**Solution:** Already fixed with `dynamicParams = true`
- Wait for new deployment to complete
- Clear browser cache and try again

## Step 5: Check Build Logs

In Vercel Dashboard → Deployments → Click latest deployment → View Build Logs

Look for:
- `[Build] Found X blog posts for static generation`
- `[Sanity Client] Configuration:` logs
- Any error messages

## Step 6: Common Issues & Solutions

### Issue: 404 on all /blog/* pages
**Cause:** No blog posts published in Sanity
**Fix:** Publish at least one blog post in Sanity Studio

### Issue: 404 on specific blog posts
**Cause:** Slug mismatch or post not published
**Fix:** 
1. Check slug in /blog-debug matches URL
2. Verify post is published (not draft)

### Issue: Environment variables not showing in /blog-debug
**Cause:** Env vars not set in Vercel or wrong scope
**Fix:** 
1. Add env vars in Vercel dashboard
2. Ensure they're set for "Production" environment
3. Redeploy after adding env vars

### Issue: /blog-debug works but /blog gives empty list
**Cause:** Posts exist but query is failing
**Fix:** Check Sanity Studio for proper document structure

## Quick Verification Checklist

- [ ] Git push succeeded
- [ ] Vercel deployment completed successfully
- [ ] /blog-debug shows blog posts
- [ ] /blog shows blog post cards
- [ ] Can click into individual blog posts
- [ ] Images load correctly
- [ ] No console errors

## Need More Help?

Check these in order:
1. Vercel build logs for errors
2. Browser console for client-side errors
3. /blog-debug page for Sanity connection status
4. Sanity Studio to verify posts are published
