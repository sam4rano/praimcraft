export function calculateReadingTime(content: string): number {
  // Average reading speed: 200-250 words per minute
  // Using 225 as a middle ground
  const wordsPerMinute = 225;
  
  // Remove HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.trim().split(/\s+/).length;
  
  // Calculate reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum reading time is 1 minute
  return Math.max(1, readingTime);
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}
