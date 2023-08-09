export const Config = {
  NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN || process.env.NOTION_TOKEN || '',
  NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || process.env.NOTION_DATABASE_ID || '',
}