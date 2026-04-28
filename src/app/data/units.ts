import { unitDetailImages } from "./images";

export interface UnitFeature {
  icon: "bed" | "bath" | "wifi" | "ac" | "kitchen" | "view";
  label: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  location: string;
}

export interface UnitData {
  id: string;
  unitNumber: string;
  name: string;
  viewType: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  price: { min: number; max: number };
  rating: number;
  reviewCount: number;
  location: string;
  airbnbUrl: string;
  viewBadge: string;
  badgeColor: string;
  accentColor: string;
  accentLight: string;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  features: UnitFeature[];
  checkin: string;
  checkout: string;
  maxGuests: number;
  houseRules: string[];
  nearbyPlaces: { name: string; distance: string; icon: string }[];
  reviews: Review[];
}

export const UNITS: UnitData[] = [
  {
    id: "sea-view",
    unitNumber: "26",
    name: "Unit 26: SeaView Studio",
    viewType: "Sea View",
    tagline: "Wake up to the ocean every morning",
    description:
      "Wake up to stunning sea views in this cozy and stylish studio, perfect for a relaxing and refreshing stay.",
    extendedDescription:
      "Perched on the upper floors of Marina Spatial Condo, Unit 26 offers an unobstructed panoramic view of the Bohol Strait. The open-plan studio is thoughtfully designed with premium furnishings, a fully equipped kitchen, and a private balcony where you can sip your morning coffee while watching the waves. Whether you're here for a romantic escape or solo retreat, the sea breeze and natural light make every moment unforgettable.",
    price: { min: 1850, max: 1850 },
    rating: 4.92,
    reviewCount: 38,
    location: "Dumaguete City, Negros Oriental",
    airbnbUrl: "https://www.airbnb.com/rooms/1346933732794342250",
    viewBadge: "🌊 Sea View",
    badgeColor: "rgba(33, 150, 166, 0.85)",
    accentColor: "#2196A6",
    accentLight: "#e8f5f8",
    heroImage: unitDetailImages.seaView.heroBanner,
    galleryImages: unitDetailImages.seaView.gallery,
    features: [
      { icon: "bed", label: "1 Bed" },
      { icon: "bath", label: "1 Bathroom" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "kitchen", label: "Kitchen" },
      { icon: "view", label: "Sea View" },
    ],
    checkin: "12:00 PM",
    checkout: "12:00 PM",
    maxGuests: 2,
    houseRules: [
      "No smoking inside the unit",
      "No pets allowed",
      "Quiet hours from 10:00 PM – 7:00 AM",
      "No parties or events",
      "Check-in after 12:00 PM",
    ],
    nearbyPlaces: [
      { name: "Rizal Boulevard", distance: "0.3 km", icon: "🌊" },
      { name: "Silliman University", distance: "1.2 km", icon: "🎓" },
      { name: "Lee Plaza Mall", distance: "0.8 km", icon: "🛍️" },
      { name: "Sans Rival Bistro", distance: "0.5 km", icon: "🍽️" },
      { name: "Dumaguete Cathedral", distance: "1.0 km", icon: "⛪" },
    ],
    reviews: [
      {
        id: 1,
        name: "Maria Santos",
        avatar: "MS",
        date: "March 2025",
        rating: 5,
        comment:
          "Absolutely stunning sea views! We woke up every morning to the most beautiful sunrise over the water. The unit was immaculate, well-equipped, and the host was incredibly responsive. Will definitely be back!",
        location: "Cebu City, Philippines",
      },
      {
        id: 2,
        name: "James Reyes",
        avatar: "JR",
        date: "February 2025",
        rating: 5,
        comment:
          "Perfect staycation spot. The balcony view is everything — we spent hours just sitting there watching the sea. Very clean, great AC, and fast Wi-Fi. Location is super convenient too.",
        location: "Manila, Philippines",
      },
      {
        id: 3,
        name: "Yuki Tanaka",
        avatar: "YT",
        date: "January 2025",
        rating: 4,
        comment:
          "Lovely studio with an amazing sea view. The kitchen was fully stocked which was great. Only minor thing was the TV remote was missing, but the host sorted it quickly. Would recommend!",
        location: "Tokyo, Japan",
      },
      {
        id: 4,
        name: "Ana Cruz",
        avatar: "AC",
        date: "December 2024",
        rating: 5,
        comment:
          "This was our anniversary staycation and it was perfect. Woke up to the sea every day. The unit is modern, spotlessly clean, and has everything you need. The price is very reasonable for what you get.",
        location: "Bacolod City, Philippines",
      },
    ],
  },
  {
    id: "mountain-view",
    unitNumber: "28",
    name: "Unit 28: MountainView Studio",
    viewType: "Mountain View",
    tagline: "Peaceful escapes with lush green vistas",
    description:
      "Relax in a peaceful studio with calming mountain views, designed for comfort and quiet escapes.",
    extendedDescription:
      "Unit 28 is your sanctuary for quiet reflection. Overlooking the lush green mountains of Negros Oriental, this thoughtfully decorated studio brings a sense of calm the moment you step inside. The natural palette of warm wood tones and earthy textiles complements the view perfectly. Whether you're working remotely or simply unwinding from a busy week, the tranquility of the mountain panorama will restore your energy and soothe your soul.",
    price: { min: 1850, max: 1850 },
    rating: 4.85,
    reviewCount: 27,
    location: "Dumaguete City, Negros Oriental",
    airbnbUrl: "https://www.airbnb.com/rooms/1213687251867764010",
    viewBadge: "⛰️ Mountain View",
    badgeColor: "rgba(94, 201, 122, 0.85)",
    accentColor: "#3aaa5c",
    accentLight: "#edf9f1",
    heroImage: unitDetailImages.mountainView.heroBanner,
    galleryImages: unitDetailImages.mountainView.gallery,
    features: [
      { icon: "bed", label: "1 Bed" },
      { icon: "bath", label: "1 Bathroom" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "kitchen", label: "Kitchen" },
      { icon: "view", label: "Mountain View" },
    ],
    checkin: "12:00 PM",
    checkout: "12:00 PM",
    maxGuests: 2,
    houseRules: [
      "No smoking inside the unit",
      "No pets allowed",
      "Quiet hours from 10:00 PM – 7:00 AM",
      "No parties or events",
      "Check-in after 12:00 PM",
    ],
    nearbyPlaces: [
      { name: "Twin Lakes", distance: "25 km", icon: "🏞️" },
      { name: "Casaroro Falls", distance: "18 km", icon: "💧" },
      { name: "Silliman University", distance: "1.5 km", icon: "🎓" },
      { name: "Gabby's Bistro", distance: "0.7 km", icon: "🍽️" },
      { name: "Dumaguete Market", distance: "1.2 km", icon: "🛒" },
    ],
    reviews: [
      {
        id: 1,
        name: "Lorenzo Villanueva",
        avatar: "LV",
        date: "March 2025",
        rating: 5,
        comment:
          "Such a peaceful getaway! The mountain view was so calming. We used this unit to work remotely for a week and it was perfect — fast Wi-Fi, great AC, and such a serene environment. Highly recommend!",
        location: "Iloilo City, Philippines",
      },
      {
        id: 2,
        name: "Sophie Chen",
        avatar: "SC",
        date: "February 2025",
        rating: 5,
        comment:
          "The view from this unit is so green and calming. It's exactly what I needed after a stressful month. The host was very welcoming. The studio is small but perfectly laid out. Loved every minute.",
        location: "Singapore",
      },
      {
        id: 3,
        name: "Mark dela Rosa",
        avatar: "MR",
        date: "January 2025",
        rating: 4,
        comment:
          "Very relaxing stay. Mountain view is beautiful especially in the morning. The unit is clean and well-maintained. Good location — close to restaurants and shops. Would book again.",
        location: "Cagayan de Oro, Philippines",
      },
    ],
  },
  {
    id: "city-view",
    unitNumber: "30",
    name: "Unit 30: CityView Studio",
    viewType: "City View",
    tagline: "Urban energy meets cozy comfort",
    description:
      "Enjoy a modern city-style stay with comfort and accessibility, perfect for quick getaways and urban adventures.",
    extendedDescription:
      "Unit 30 puts you right in the pulse of Dumaguete City life. With a sweeping city view from your window, you'll enjoy watching the city's daily rhythm — from the morning school rush to the glittering lights at night. The contemporary studio design features clean lines and modern appliances, making it ideal for business travelers, solo explorers, or couples who want to experience everything the city has to offer without sacrificing comfort.",
    price: { min: 1850, max: 1850 },
    rating: 4.78,
    reviewCount: 19,
    location: "Dumaguete City, Negros Oriental",
    airbnbUrl: "https://www.airbnb.com/",
    viewBadge: "🌆 City View",
    badgeColor: "rgba(139, 110, 78, 0.85)",
    accentColor: "#8b6e4e",
    accentLight: "#f5efe9",
    heroImage: unitDetailImages.cityView.heroBanner,
    galleryImages: unitDetailImages.cityView.gallery,
    features: [
      { icon: "bed", label: "1 Bed" },
      { icon: "bath", label: "1 Bathroom" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "kitchen", label: "Kitchen" },
      { icon: "view", label: "City View" },
    ],
    checkin: "12:00 PM",
    checkout: "12:00 PM",
    maxGuests: 2,
    houseRules: [
      "No smoking inside the unit",
      "No pets allowed",
      "Quiet hours from 10:00 PM – 7:00 AM",
      "No parties or events",
      "Check-in after 12:00 PM",
    ],
    nearbyPlaces: [
      { name: "Rizal Boulevard", distance: "0.5 km", icon: "🌊" },
      { name: "Lee Plaza Mall", distance: "0.6 km", icon: "🛍️" },
      { name: "Dumaguete Cathedral", distance: "0.8 km", icon: "⛪" },
      { name: "Sans Rival Bistro", distance: "0.3 km", icon: "🍽️" },
      { name: "Ninoy Aquino Park", distance: "0.4 km", icon: "🌳" },
    ],
    reviews: [
      {
        id: 1,
        name: "Rachel Go",
        avatar: "RG",
        date: "March 2025",
        rating: 5,
        comment:
          "Loved being in the center of everything! The city view is amazing especially at night. The unit is modern, very clean, and the location is unbeatable. Everything is walking distance. Great value!",
        location: "Davao City, Philippines",
      },
      {
        id: 2,
        name: "Carlos Mendez",
        avatar: "CM",
        date: "February 2025",
        rating: 4,
        comment:
          "Great location for exploring Dumaguete. Walked to the boulevard and lots of restaurants. The unit is compact but very functional. Host communicated well. Would stay again for business trips.",
        location: "Manila, Philippines",
      },
      {
        id: 3,
        name: "Emma Whitfield",
        avatar: "EW",
        date: "January 2025",
        rating: 5,
        comment:
          "Perfect base for exploring Dumaguete! The city view from the window at night is gorgeous. Spotlessly clean studio, all amenities you need. Highly recommend for first-timers to the city.",
        location: "London, UK",
      },
    ],
  },
];
