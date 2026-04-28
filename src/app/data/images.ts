// Helper function to convert imgur URLs to direct image URLs
export function normalizeImgurUrl(url: string): string {
  if (!url) return url;
  
  // If it's already a direct imgur image URL, return as is
  if (url.includes("i.imgur.com")) {
    return url;
  }
  
  // Convert imgur.com/a/ALBUM_ID to direct image format
  // This assumes the first image or a specific image ID
  if (url.includes("imgur.com/a/")) {
    const albumId = url.split("imgur.com/a/")[1];
    // Return direct imgur URL with album ID (works for single images)
    return `https://i.imgur.com/${albumId}.jpg`;
  }
  
  // Convert imgur.com/IMAGE_ID to direct image format
  if (url.includes("imgur.com/") && !url.includes("imgur.com/a/")) {
    const imageId = url.split("imgur.com/")[1];
    return `https://i.imgur.com/${imageId}.jpg`;
  }
  
  return url;
}

export const homepageImages = {
  heroBanner:
    "https://images.unsplash.com/photo-1768162486464-1ac716d33c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB2aWV3JTIwY29uZG8lMjBiYWxjb255JTIwdHJvcGljYWwlMjBvY2VhbnxlbnwxfHx8fDE3NzY2MDU4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  featuredSeaViewCard:
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1213687251867764010/original/4ff65dc4-04b9-4384-952b-7514da823e85.jpeg?im_w=960",
  // For imgur, use direct image URLs like: https://i.imgur.com/IMAGEID.jpg
  // NOT album URLs like: https://imgur.com/a/G3ZbOre
  featuredMountainViewCard:
    "https://i.imgur.com/PeBIbjF.jpeg",
  featuredCityViewCard:
    "https://i.imgur.com/2nN6TaX.jpg",
  aboutPoolFeature:
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1213687251867764010/original/4ff65dc4-04b9-4384-952b-7514da823e85.jpeg?im_w=960",
};

export const unitDetailImages = {
  seaView: {
    heroBanner:
      "https://images.unsplash.com/photo-1768162486464-1ac716d33c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB2aWV3JTIwY29uZG8lMjBiYWxjb255JTIwdHJvcGljYWwlMjBvY2VhbnxlbnwxfHx8fDE3NzY2MDU4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1756640220287-ba9efa89f6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJhbGNvbnklMjBzZWElMjB2aWV3JTIwbHV4dXJ5JTIwY29uZG8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY2MDY3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080", caption: "Balcony with panoramic sea view" },
      {
        url: "https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHdoaXRlJTIwbGluZW4lMjBtb3JuaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzc2NjA2NzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Cozy bedroom with morning light",
      },
      {
        url: "https://images.unsplash.com/photo-1750764515068-80d222d974bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBraXRjaGVuJTIwYXBhcnRtZW50JTIwYnJpZ2h0fGVufDF8fHx8MTc3NjYwNjcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Fully equipped modern kitchen",
      },
      {
        url: "https://images.unsplash.com/photo-1774578341948-f3a15f81a34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGNsZWFuJTIwbWluaW1hbGlzdCUyMHNwYXxlbnwxfHx8fDE3NzY2MDY3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Clean minimalist bathroom",
      },
      {
        url: "https://images.unsplash.com/photo-1772475329901-58f77a9625ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwc29mYSUyMHdhcm0lMjBjb3p5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2NjA2NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Warm and cozy living area",
      },
      {
        url: "https://images.unsplash.com/photo-1760816502497-0af433df7f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHNlYSUyMHR1cnF1b2lzZSUyMHdhdGVyJTIwUGhpbGlwcGluZXMlMjBjb2FzdGxpbmV8ZW58MXx8fHwxNzc2NjA2NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Tropical sea views from Dumaguete",
      },
    ],
  },
  mountainView: {
    heroBanner:
      "https://images.unsplash.com/photo-1765375522831-b01105fbab14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXclMjBhcGFydG1lbnQlMjB3aW5kb3clMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzY2MDU4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1724093121167-a598e122f831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG1vdW50YWluJTIwZ3JlZW4lMjB2YWxsZXklMjBmb3Jlc3QlMjB2aWV3JTIwd2luZG93fGVufDF8fHx8MTc3NjYwNjcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Lush tropical mountain view",
      },
      {
        url: "https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHdoaXRlJTIwbGluZW4lMjBtb3JuaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzc2NjA2NzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Serene bedroom retreat",
      },
      {
        url: "https://images.unsplash.com/photo-1750764515068-80d222d974bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBraXRjaGVuJTIwYXBhcnRtZW50JTIwYnJpZ2h0fGVufDF8fHx8MTc3NjYwNjcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Bright and modern kitchen",
      },
      {
        url: "https://images.unsplash.com/photo-1774578341948-f3a15f81a34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGNsZWFuJTIwbWluaW1hbGlzdCUyMHNwYXxlbnwxfHx8fDE3NzY2MDY3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Clean spa-style bathroom",
      },
      {
        url: "https://images.unsplash.com/photo-1767953365367-ab79376c4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsJTIwbHVzaCUyMGdyZWVuJTIwbmF0dXJlfGVufDF8fHx8MTc3NjYwNjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Lush nature trails nearby",
      },
      {
        url: "https://images.unsplash.com/photo-1758874573286-c65c3d749a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwd29ya3NwYWNlJTIwbGFwdG9wJTIwd29yayUyMGZyb20lMjBob21lJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3NjYwNjcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Comfortable work-from-home setup",
      },
    ],
  },
  cityView: {
    heroBanner:
      "https://images.unsplash.com/photo-1758210480505-253f4dc6a2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdmlldyUyMGFwYXJ0bWVudCUyMG5pZ2h0JTIwdXJiYW4lMjBsaWdodHN8ZW58MXx8fHwxNzc2NjA1ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551397967-0ef0cf709509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwYXBhcnRtZW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzY2MDY3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "City lights at night",
      },
      {
        url: "https://images.unsplash.com/photo-1774311237295-a65a4c1ff38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGNvenl8ZW58MXx8fHwxNzc2NjA1ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Contemporary studio interior",
      },
      {
        url: "https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMHdoaXRlJTIwbGluZW4lMjBtb3JuaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzc2NjA2NzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Relaxing bedroom",
      },
      {
        url: "https://images.unsplash.com/photo-1774578341948-f3a15f81a34d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGNsZWFuJTIwbWluaW1hbGlzdCUyMHNwYXxlbnwxfHx8fDE3NzY2MDY3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Modern bathroom",
      },
      {
        url: "https://images.unsplash.com/photo-1765862857151-929d42527bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBzdHJlZXQlMjBjYWZlJTIwcmVzdGF1cmFudCUyMER1bWFndWV0ZSUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NjYwNjcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Vibrant city streets below",
      },
      {
        url: "https://images.unsplash.com/photo-1750764515068-80d222d974bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW8lMjBraXRjaGVuJTIwYXBhcnRtZW50JTIwYnJpZ2h0fGVufDF8fHx8MTc3NjYwNjcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Functional kitchen area",
      },
    ],
  },
};

export const featuredUnitPhotoTours = {
  studio1: [
    { name: "Living room", urls: ["https://i.imgur.com/IMG1.jpg", "https://i.imgur.com/IMG2.jpg", "https://i.imgur.com/IMG3.jpg"] },
    { name: "Kitchen", urls: ["https://i.imgur.com/IMG4.jpg", "https://i.imgur.com/IMG5.jpg", "https://i.imgur.com/IMG6.jpg"] },
    { name: "Bedroom", urls: ["https://i.imgur.com/IMG7.jpg", "https://i.imgur.com/IMG8.jpg", "https://i.imgur.com/IMG9.jpg"] },
    { name: "Bathroom", urls: ["https://i.imgur.com/IMG10.jpg", "https://i.imgur.com/IMG11.jpg", "https://i.imgur.com/IMG12.jpg"] },
  ],
  studio2: [
    { name: "Living room", urls: ["https://i.imgur.com/IMG13.jpg", "https://i.imgur.com/IMG14.jpg", "https://i.imgur.com/IMG15.jpg"] },
    { name: "Kitchen", urls: ["https://i.imgur.com/IMG16.jpg", "https://i.imgur.com/IMG17.jpg", "https://i.imgur.com/IMG18.jpg"] },
    { name: "Bedroom", urls: ["https://i.imgur.com/IMG19.jpg", "https://i.imgur.com/IMG20.jpg", "https://i.imgur.com/IMG21.jpg"] },
    { name: "Bathroom", urls: ["https://i.imgur.com/IMG22.jpg", "https://i.imgur.com/IMG23.jpg", "https://i.imgur.com/IMG24.jpg"] },
  ],
  studio3: [
    { name: "Living room", urls: ["https://i.imgur.com/IMG25.jpg", "https://i.imgur.com/IMG26.jpg", "https://i.imgur.com/IMG27.jpg"] },
    { name: "Kitchen", urls: ["https://i.imgur.com/IMG28.jpg", "https://i.imgur.com/IMG29.jpg", "https://i.imgur.com/IMG30.jpg"] },
    { name: "Bedroom", urls: ["https://i.imgur.com/IMG31.jpg", "https://i.imgur.com/IMG32.jpg", "https://i.imgur.com/IMG33.jpg"] },
    { name: "Bathroom", urls: ["https://i.imgur.com/IMG34.jpg", "https://i.imgur.com/IMG35.jpg", "https://i.imgur.com/IMG36.jpg"] },
  ],
};

export function getFeaturedUnitPhotoTourCategories(studioSlug) {
  const categories = featuredUnitPhotoTours[studioSlug] || [];
  return categories.map((category) => ({
    ...category,
    urls: [...category.urls],
  }));
}

export function buildReactStudioPhotoUrl(studioSlug, categoryFolder, fileName) {
  return `/images/${studioSlug}/${categoryFolder}/${fileName}`;
}

export const photoTourPageStudios = [
  {
    slug: "studio1",
    name: "Studio 1",
    photos: [
      { label: "Living room", url: "https://i.imgur.com/IMG1.jpg" },
      { label: "Kitchen", url: "https://i.imgur.com/IMG2.jpg" },
      { label: "Bedroom", url: "https://i.imgur.com/IMG3.jpg" },
    ],
  },
  {
    slug: "studio2",
    name: "Studio 2",
    photos: [
      { label: "Living room", url: "https://i.imgur.com/IMG4.jpg" },
      { label: "Bathroom", url: "https://i.imgur.com/IMG5.jpg" },
      { label: "Exterior", url: "https://i.imgur.com/IMG6.jpg" },
      { label: "Pool", url: "https://i.imgur.com/IMG7.jpg" },
    ],
  },
];

export function buildPhotoTourPageImageUrl(studioSlug, fileName) {
  // This function is kept for backwards compatibility
  return `./images/${studioSlug}/${fileName}`;
}
