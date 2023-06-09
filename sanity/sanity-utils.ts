import { blog } from "@/types/blog";
import { homePage } from "@/types/homePage";
import { product } from "@/types/product";
import { contactUs } from "@/types/contactUs";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { arenas } from "@/types/arenas";

export async function getHomePage(): Promise<homePage[]> {
  return createClient(config).fetch(groq`
        *[_type == "homePage"] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            heroText,
            introText,
            introSubText,
            featuresTitle,
            featuresHeader1,
            featuresText1,
            featuresHeader2,
            featuresText2,
            featuresHeader3,
            featuresText3,
            featuresHeader4,
            featuresText4,
            featuresHeader5,
            featuresText5,
            featuresHeader6,
            featuresText6,
            priceTextBasic,
            priceTextEssential,
            priceTextPremium,
            }`);
}

export async function getBlog(): Promise<blog[]> {
  return createClient(config).fetch(groq`
  *[_type == "blog"] | order(_createdAt desc) {
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          alt,
          url,
          content
        }`);
}

export async function getBlogPage(slug: string): Promise<blog> {
  return createClient(config).fetch(
    groq`
        *[_type == "blog" && slug.current == $slug][0] {
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          alt,
          imgCredit,
          url,
          content
        }`,
    { slug }
  );
}

export async function getProductPage(
  time: Number = 0,
  shouldError: Boolean = false
): Promise<product[]> {
  return createClient(config).fetch(groq`
        *[_type == "product"] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            headerInfo,
            "videoUrl": videoUrl.asset->url,
            text1,
            "image1":image1.asset->url,
            "image2":image2.asset->url,
            text2,
            "image3":image3.asset->url,
            text3,
            }`);
}

export async function getContacUstPage(): Promise<contactUs[]> {
  return createClient(config).fetch(groq`
        *[_type == "contactUs"] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            address,
            email1,
            email2,
            phoneNumber,
            }`);
}

export async function getArenas(): Promise<arenas[]> {
  return createClient(config).fetch(groq`
  *[_type == "arenas"] | order(_createdAt desc) {
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          alt,
          url,
        }`);
}
