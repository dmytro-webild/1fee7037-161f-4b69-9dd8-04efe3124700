"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "Locations", id: "locations" },
            { name: "About", id: "about" },
            { name: "Order Online", id: "order" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Paleta Bar"
          bottomLeftText="Luxury Dessert Lounge"
          bottomRightText="hello@thepauletabar.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="The Paleta Bar"
          description="Handcrafted. Chocolate-Dipped. Unforgettable."
          buttons={[
            { text: "Order Your First Bite", href: "order" },
            { text: "Explore Flavors", href: "menu" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/ice-cream-chocolate-composition_23-2147985542.jpg"
          imageAlt="Luxury chocolate-dipped paleta with premium toppings"
          showDimOverlay={true}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Customer Love"
          description="Real experiences from paleta enthusiasts who've discovered their new favorite indulgence"
          tag="Loved by Customers"
          testimonials={[
            {
              id: "1",              name: "Maria García",              role: "Design Director",              testimonial: "From the first bite, the tres leches paleta dipped in dark chocolate was incredible. Creamy, rich, and perfectly balanced — a dessert experience I'll never forget.",              imageSrc: "http://img.b2bpic.net/free-vector/variety-flat-male-avatars_23-2147668579.jpg",              imageAlt: "professional headshot woman portrait"
            },
            {
              id: "2",              name: "James Mitchell",              role: "Food Critic",              testimonial: "The Paleta Bar has redefined what a premium dessert experience should be. Every element is thoughtfully crafted, from the handmade paletas to the luxurious chocolate coatings.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-with-ear-bandage_23-2149705925.jpg",              imageAlt: "professional headshot man portrait"
            },
            {
              id: "3",              name: "Sofia Rossi",              role: "Pastry Chef",              testimonial: "These paletas rival the finest gelato I've had in Italy. The quality of ingredients and attention to detail is exceptional. Simply masterful.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-short-curly-hair-colorful-shirt-smiling-cheerfully-showing-thumbs-up-green-wall_141793-29344.jpg",              imageAlt: "diverse professional headshot portrait"
            },
            {
              id: "4",              name: "David Chen",              role: "Restaurant Owner",              testimonial: "I've recommended The Paleta Bar to all my friends. It's become my go-to spot for that perfect balance of indulgence and sophistication.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-conference-room-thinking-about-future_482257-25787.jpg",              imageAlt: "professional headshot diverse portrait"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Signature Paletas"
          description="Handcrafted flavors that define our collection. Each paleta is made fresh daily with premium ingredients."
          tag="Best Sellers"
          products={[
            {
              id: "1",              brand: "The Paleta Bar",              name: "Tres Leches",              price: "$12.00",              rating: 5,
              reviewCount: "342",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-popsicles-with-mint-strawberries_23-2148763612.jpg",              imageAlt: "Tres Leches paleta - Rich milk cake flavor dipped in dark chocolate"
            },
            {
              id: "2",              brand: "The Paleta Bar",              name: "Strawberries & Cream",              price: "$12.00",              rating: 5,
              reviewCount: "298",              imageSrc: "http://img.b2bpic.net/free-photo/chocolate-brownies-with-vanilla-ice-cream_1339-7878.jpg",              imageAlt: "Strawberries and Cream paleta - Fresh berries with creamy base"
            },
            {
              id: "3",              brand: "The Paleta Bar",              name: "Mango Chamoy",              price: "$13.00",              rating: 5,
              reviewCount: "215",              imageSrc: "http://img.b2bpic.net/free-photo/ice-cream-with-peach-flavor-table_23-2148539376.jpg",              imageAlt: "Mango Chamoy paleta - Sweet mango with spicy chamoy drizzle"
            },
            {
              id: "4",              brand: "The Paleta Bar",              name: "Cookies & Cream",              price: "$12.00",              rating: 5,
              reviewCount: "267",              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-delicious-nougats-wooden-board_23-2149617438.jpg",              imageAlt: "Cookies and Cream paleta - Vanilla cream with crushed cookies"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="four-items-2x2-equal-grid"
          buttons={[
            { text: "View Full Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="build-your-own" data-section="build-your-own">
        <FeatureCardSixteen
          title="Build Your Own Paleta"
          description="Start with any of our signature flavors and customize your perfect indulgence. Choose your chocolate dip, select from premium toppings, and create something uniquely yours."
          tag="Customize"
          negativeCard={{
            items: [
              "Limited flavor options",              "No customization available",              "Standard toppings only"
            ]
          }}
          positiveCard={{
            items: [
              "Choose from 8+ signature flavors",              "Select your premium chocolate dip",              "Unlimited topping combinations",              "Oreos, almonds, coconut, caramel drizzle"
            ]
          }}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[
            { text: "Create Your Dream Paleta", href: "order" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content: "Step inside The Paleta Bar and experience a modern dessert lounge where handcrafted paletas meet premium chocolate and"
            },
            {
              type: "text",              content: "endless toppings. Every bite tells a story of craftsmanship, indulgence, and pure dessert bliss."
            }
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Discover Our Story", href: "about" },
            { text: "Visit Our Store", href: "locations" }
          ]}
        />
      </div>

      <div id="locations" data-section="locations">
        <MetricCardEleven
          title="Find Your Paleta"
          description="Visit one of our luxury dessert lounges for an unforgettable experience. Each location features premium seating, curated music, and Instagram-worthy ambiance."
          tag="Locations"
          metrics={[
            {
              id: "1",              value: "Downtown",              title: "Main Location",              description: "Heart of the city dessert scene",              imageSrc: "http://img.b2bpic.net/free-photo/waitress-offering-macarons_23-2147985063.jpg",              imageAlt: "dessert shop storefront modern design"
            },
            {
              id: "2",              value: "Midtown",              title: "Lounge & Bar",              description: "Premium evening experience",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-waitress-holding-tray_23-2147985008.jpg",              imageAlt: "downtown dessert bar urban location"
            },
            {
              id: "3",              value: "Uptown",              title: "Bistro Style",              description: "Elegant seated dessert lounge",              imageSrc: "http://img.b2bpic.net/free-photo/man-relaxing-by-vaping-from-hookah-bar_23-2149191854.jpg",              imageAlt: "luxury dessert bar evening ambiance"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[
            { text: "Find a Store Near You", href: "locations" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Made to Be Shared"
          description="Join thousands of dessert lovers who've shared their Paleta Bar moments. Tag us for a chance to be featured."
          tag="Instagram"
          names={[
            "Food blogger picks",            "Dessert lover favorite",            "Premium ice cream",            "Luxury treats",            "Handcrafted quality",            "Chocolate perfection",            "Instagram worthy",            "Indulgent moments"
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Indulge?"
          title="Order Your Paletas Today"
          description="Experience the creamy richness of our handcrafted paletas. Available for pickup, delivery, or catering orders."
          buttons={[
            { text: "Order Pickup", href: "https://order.thepauletabar.com" },
            { text: "Order Delivery", href: "https://delivery.thepauletabar.com" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/delicious-ice-cream-winter-time_23-2149618896.jpg"
          imageAlt="Luxury chocolate-dipped paletas with premium toppings"
          columns={[
            {
              title: "Menu",              items: [
                { label: "Signature Paletas", href: "#menu" },
                { label: "Build Your Own", href: "#build-your-own" },
                { label: "Seasonal Flavors", href: "#menu" }
              ]
            },
            {
              title: "Locations",              items: [
                { label: "Downtown", href: "#locations" },
                { label: "Midtown", href: "#locations" },
                { label: "Uptown", href: "#locations" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Franchise", href: "https://franchise.thepauletabar.com" },
                { label: "Careers", href: "https://careers.thepauletabar.com" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          logoText="The Paleta Bar"
          copyrightText="© 2025 The Paleta Bar. Crafted in Luxury."
        />
      </div>
    </ThemeProvider>
  );
}
