type SocialMediaTypes = "instagram" | "facebook" | "youtube" | "tiktok" | "whatsapp" | "email_cs";

interface SocialMedia {
  id: number;
  social_media: SocialMediaTypes;
  link_social_media: string;
}