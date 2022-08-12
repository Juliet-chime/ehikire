import realEstate from "../../assest/images/icons/realEstate.png";
import job from "../../assest/images/icons/jobs.png";
import car from "../../assest/images/icons/car.png";
import retail from "../../assest/images/icons/retail.png";
import hotel from "../../assest/images/icons/hotel.png";
import attraction from "../../assest/images/icons/attraction.png";
import phone from "../../assest/images/icons/phone.png";
import service from "../../assest/images/icons/services.png";
import restaurant from "../../assest/images/icons/restaurant.png";

const routes = [
  {
    name: "Real Estate",
    link: "/realEstate",
    image: realEstate,

    subRoutes: [
      {
        name: "Houses&Apartment For Sale",
        link: "/houses&apartmentforsale",
      },
      {
        name: "Houses&Apartment For Rent",
        link: "/houses&Apartmentforrent",
      },
      {
        name: "Land&Plot For Sales",
        link: "/land&plotforsales",
      },
      {
        name: "Land&Plot For Rent",
        link: "/land&plotforrent",
      },
      {
        name: "Short Let",
        link: "/shortlet",
      },
    ],
  },

  {
    name: "Services",
    link: "/services",
    image: service,

    subRoutes: [
      {
        name: "Agency",
        link: "/agency",
      },
      {
        name: "Automotives",
        link: "/automotives",
      },
      {
        name: "Beauty&Personal Care",
        link: "/beauty&personalcare",
      },
      {
        name: "Building&Repair",
        link: "/building&repair",
      },
      {
        name: "Classes&Lessons",
        link: "/classes&lessons",
      },
      {
        name: "Cleaning",
        link: "/cleaning",
      },
      {
        name: "Computer&IT",
        link: "/computer&IT",
      },
      {
        name: "Electronics",
        link: "/electronics",
      },
      {
        name: "Fitness&Sports",
        link: "/fitness&sports",
      },
      {
        name: "Gardening&Landscaping",
        link: "/gardening&landscaping",
      },
      {
        name: "Health",
        link: "health",
      },
      {
        name: "Logistics&Movers",
        link: "/logistics&Movers",
      },
      {
        name: "Manufacturing",
        link: "/manufacturing",
      },
      {
        name: "Music&Film",
        link: "/music&film",
      },
      {
        name: "Party&Events",
        link: "/party&events",
      },
      {
        name: "Pet Services",
        link: "/petservices",
      },
      {
        name: "Photography&Videography",
        link: "/photography&videography",
      },
      {
        name: "Printing",
        link: "/printing",
      },
      {
        name: "Professionals",
        link: "/professionals",
      },
      {
        name: "Security&Surveillance",
        link: "/security&surveillance",
      },
      {
        name: "Skills&Talent",
        link: "/skills&talent",
      },
    ],
  },

  {
    name: "Jobs",
    link: "/job",
    image: job,
    subRoutes: [
      {
        name: "Accounting",
        link: "/accounting",
      },
      {
        name: "Administrative",
        link: "/administrative",
      },
      {
        name: "Advert&Marketing",
        link: "/advert&marketing",
      },
      {
        name: "Architecture",
        link: "/architecture",
      },
      {
        name: "Beauty",
        link: "/beauty",
      },
      {
        name: "Consultant",
        link: "/consultant",
      },
      {
        name: "Driver",
        link: "/driver",
      },
      {
        name: "Engineering",
        link: "/engineering",
      },
      {
        name: "Farming",
        link: "/farming",
      },
      {
        name: "HealthCare",
        link: "/healthcare",
      },
      {
        name: "Hotel",
        link: "/hotel",
      },
      {
        name: "House Keeping",
        link: "/housekeeping",
      },
      {
        name: "Human Resources",
        link: "/humanresources",
      },
      {
        name: "IT&Software",
        link: "/it&software",
      },
      {
        name: "Internship",
        link: "/internship",
      },
      {
        name: "Legal",
        link: "/legal",
      },
      {
        name: "Logistics",
        link: "/logistics",
      },
      {
        name: "Management",
        link: "/management",
      },
      {
        name: "Manufacturing",
        link: "/manufacturing",
      },
      {
        name: "Nanny",
        link: "/nanny",
      },
      {
        name: "Oil&Gas",
        link: "/oil&gas",
      },
      {
        name: "Part-Time",
        link: "/part-time",
      },
      {
        name: "Quality Control/Assurance",
        link: "/qualitycontrol/assurance",
      },
      {
        name: "Research",
        link: "/research",
      },
      {
        name: "Restaurant",
        link: "/restaurant",
      },
      {
        name: "Retail",
        link: "/retail",
      },
      {
        name: "Sales&Telemarketing",
        link: "/sales&telemarketing",
      },
      {
        name: "Security",
        link: "/security",
      },
      {
        name: "Sport",
        link: "/sport",
      },
      {
        name: "Teaching",
        link: "/teaching",
      },
      {
        name: "Technology",
        link: "/technology",
      },
      {
        name: "Travel & Tourism",
        link: "/travel&tourism",
      },
      {
        name: "Others...",
        link: "/others...",
      },
    ],
  },

  {
    name: "Gadgets",
    link: "/gadgets",
    image: phone,
    subRoutes: [
      {
        name: "Agency",
        link: "/agency",
      },
    ],
  },

  {
    name: "Automobile",
    link: "/automobile",
    image: car,
    subRoutes: [
      {
        name: "",
        link: "/",
      },
      {
        name: "Cars",
        link: "/cars",
      },
      {
        name: "Trucks&Trailers",
        link: "/trucks&trailers",
      },
      {
        name: "Buses&Micro Buses",
        link: "/Buses & Micro Buses",
      },
      {
        name: "Heavy Equipment",
        link: "/heavyequipment",
      },
      {
        name: "Motorcycles&Scooters",
        link: "/motorcycles&scooters",
      },
      {
        name: "Watercrafts&Boats",
        link: "/watercrafts&boats",
      },
    ],
  },

  {
    name: "Retails",
    link: "/retails",
    image: retail,
    subRoutes: [
      {
        name: "Agriculture&Farming",
        link: "/agriculture&farming",
      },
      {
        name: "Apparel",
        link: "/apparel",
      },
      {
        name: "Art,Paintings&Craft",
        link: "/art,paintings&craft",
      },
      {
        name: "Audio,Books&Movies",
        link: "/audio,books&movies",
      },
      {
        name: "Baby&Toddler Essentials",
        link: "/baby&toddleressentials",
      },
      {
        name: "Beauty&Personal Care",
        link: "/beauty&personalcare",
      },
      {
        name: "CellPhone,Desktops,Laptops&Tablets",
        link: "/cellphone,desktops,laptops&tablets",
      },
      {
        name: "Construction Material&Suppiles",
        link: "/constructionmaterial&suppiles",
      },
      {
        name: "Consumer Electronics",
        link: "/consumerelectronics",
      },
      {
        name: "Education",
        link: "/education",
      },
      {
        name: "Electrical Materials&Suppiles",
        link: "/electricalmaterials&suppiles",
      },
      {
        name: "Energy&Power Suppiles",
        link: "/energy&powersuppiles",
      },
      {
        name: "Event&Party Supplies",
        link: "/event&partysupplies",
      },
      {
        name: "Fitness&Sport",
        link: "/fitness&sport",
      },
      {
        name: "Furniture",
        link: "/furniture",
      },
      {
        name: "Garden",
        link: "/garden",
      },
      {
        name: "Gift Ideas&Presents",
        link: "/giftideas&presents",
      },
      {
        name: "Gift Card&Coupons",
        link: "/giftcard&coupons",
      },
      {
        name: "Groceries/Foodstuff",
        link: "/groceries/foodstuff",
      },
      {
        name: "Hair&Hair Care",
        link: "/hair&haircare",
      },
      {
        name: "Home Decor&Bedding",
        link: "/homedecor&bedding",
      },
      {
        name: "Household Appliances",
        link: "/householdappliances",
      },
      {
        name: "Household Supplies",
        link: "/householdsupplies",
      },
      {
        name: "Industrial Tools&Hardware",
        link: "/industrialtools&hardware",
      },
      {
        name: "Luggage",
        link: "/luggage",
      },
      {
        name: "Machinery&Equipment",
        link: "/machinery&equipment",
      },
      {
        name: "Musical Instruments",
        link: "/musicalinstruments",
      },
      {
        name: "Office",
        link: "/office",
      },
      {
        name: "Packing&printing",
        link: "/packing&printing",
      },
      {
        name: "Pet&Pet Supplies",
        link: "/pet&petsupplies",
      },
    ],
  },

  {
    name: "Hotel",
    link: "/hotel",
    image: hotel,
    subRoutes: [
      {
        name: "Guest",
        link: "/guest",
      },
      {
        name: "Short-Time",
        link: "/short-time",
      },
      {
        name: "Lodging",
        link: "/lodging",
      },
    ],
  },

  {
    name: "Attractions",
    link: "/attractions",
    image: attraction,
    subRoutes: [
      {
        name: "Cinema",
        link: "/cinema",
      },
      {
        name: "Bar&Lounge",
        link: "/bar&loungs",
      },
      {
        name: "Parks",
        link: "/parks",
      },
      {
        name: "Pools",
        link: "/pools",
      },
      {
        name: "Clubs",
        link: "/clubs",
      },
    ],
  },

  {
    name: "Restaurant",
    link: "/restaurant",
    image: restaurant,
    subRoutes: [
      {
        name: "Dine In",
        link: "/dinein",
      },
      {
        name: "Delivery",
        link: "/delivery",
      },
      {
        name: "Pickup",
        link: "/pickup",
      },
    ],
  },
];

export const popularRoutes = [
  {
    name: "Real Estate",
    link: "/realEstate",
    image: realEstate,

    subRoutes: [
      {
        name: "Houses&Apartment For Sale",
        link: "/houses&apartmentforsale",
      },
      {
        name: "Houses&Apartment For Rent",
        link: "/houses&Apartmentforrent",
      },
      {
        name: "Land&Plot For Sales",
        link: "/land&plotforsales",
      },
      {
        name: "Land&Plot For Rent",
        link: "/land&plotforrent",
      },
      {
        name: "Short Let",
        link: "/shortlet",
      },
    ],
  },

  {
    name: "Jobs",
    link: "/job",
    image: job,
    subRoutes: [
      {
        name: "Accounting",
        link: "/accounting",
      },
      {
        name: "Administrative",
        link: "/administrative",
      },
      {
        name: "Advert&Marketing",
        link: "/advert&marketing",
      },
      {
        name: "Architecture",
        link: "/architecture",
      },
      {
        name: "Beauty",
        link: "/beauty",
      },
      {
        name: "Consultant",
        link: "/consultant",
      },
      {
        name: "Driver",
        link: "/driver",
      },
      {
        name: "Engineering",
        link: "/engineering",
      },
      {
        name: "Farming",
        link: "/farming",
      },
      {
        name: "HealthCare",
        link: "/healthcare",
      },
      {
        name: "Hotel",
        link: "/hotel",
      },
      {
        name: "House Keeping",
        link: "/housekeeping",
      },
      {
        name: "Human Resources",
        link: "/humanresources",
      },
      {
        name: "IT&Software",
        link: "/it&software",
      },
      {
        name: "Internship",
        link: "/internship",
      },
      {
        name: "Legal",
        link: "/legal",
      },
      {
        name: "Logistics",
        link: "/logistics",
      },
      {
        name: "Management",
        link: "/management",
      },
      {
        name: "Manufacturing",
        link: "/manufacturing",
      },
      {
        name: "Nanny",
        link: "/nanny",
      },
      {
        name: "Oil&Gas",
        link: "/oil&gas",
      },
      {
        name: "Part-Time",
        link: "/part-time",
      },
      {
        name: "Quality Control/Assurance",
        link: "/qualitycontrol/assurance",
      },
      {
        name: "Research",
        link: "/research",
      },
      {
        name: "Restaurant",
        link: "/restaurant",
      },
      {
        name: "Retail",
        link: "/retail",
      },
      {
        name: "Sales&Telemarketing",
        link: "/sales&telemarketing",
      },
      {
        name: "Security",
        link: "/security",
      },
      {
        name: "Sport",
        link: "/sport",
      },
      {
        name: "Teaching",
        link: "/teaching",
      },
      {
        name: "Technology",
        link: "/technology",
      },
      {
        name: "Travel & Tourism",
        link: "/travel&tourism",
      },
      {
        name: "Others...",
        link: "/others...",
      },
    ],
  },

  {
    name: "Gadgets",
    link: "/gadgets",
    image: phone,
    subRoutes: [
      {
        name: "Agency",
        link: "/agency",
      },
    ],
  },

  {
    name: "Automobile",
    link: "/automobile",
    image: car,
    subRoutes: [
      {
        name: "",
        link: "/",
      },
      {
        name: "Cars",
        link: "/cars",
      },
      {
        name: "Trucks&Trailers",
        link: "/trucks&trailers",
      },
      {
        name: "Buses&Micro Buses",
        link: "/Buses & Micro Buses",
      },
      {
        name: "Heavy Equipment",
        link: "/heavyequipment",
      },
      {
        name: "Motorcycles&Scooters",
        link: "/motorcycles&scooters",
      },
      {
        name: "Watercrafts&Boats",
        link: "/watercrafts&boats",
      },
    ],
  },
];
export default routes;
