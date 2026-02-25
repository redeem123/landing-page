export interface Product {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    sizes: number[];
    category: "WOMEN" | "MEN" | "UNISEX" | "GIFT_SET" | "NICHE";
    scentFamily: string;
    topNotes: string;
    middleNotes: string;
    baseNotes: string;
    modelUrl?: string;
    boxModelUrl?: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Aventus",
        brand: "Creed",
        description: "The exceptional Aventus was inspired by the dramatic life of a historic emperor, celebrating strength, power and success. Introduced in 2010 and crafted by the deft hand of Master Perfumer Olivier Creed, this scent has grown to become the best-selling fragrance in the history of the brand.",
        price: 495,
        sizes: [30, 50, 100],
        category: "MEN",
        scentFamily: "FRUITY",
        topNotes: "Pineapple, Bergamot, Blackcurrant Leaves, Apple",
        middleNotes: "Birch, Pink Berries, Patchouli, Jasmine",
        baseNotes: "Musk, Oakmoss, Ambergris, Vanilla",
        modelUrl: "/models/CreedAventus/aventus.glb",
        boxModelUrl: "/models/CreedAventus/aventusBox.glb",
    },
    {
        id: "2",
        name: "Bleu de Chanel",
        brand: "Chanel",
        description: "A tribute to masculine freedom in an aromatic-woody fragrance with a captivating trail. A timeless, scent housed in a bottle of deep and mysterious blue. BLEU DE CHANEL Parfum is an accomplished composition with a pure, deep character. An intensely masculine signature that denotes self-confidence.",
        price: 155,
        sizes: [50, 100, 150],
        category: "MEN",
        scentFamily: "WOODY",
        topNotes: "Lemon Zest, Bergamot, Mint, Artemisia",
        middleNotes: "Lavender, Geranium, Green Notes, Pineapple",
        baseNotes: "Sandalwood, Cedar, Amberwood, Tonka Bean, Iso E Super",
        modelUrl: "/models/BleudeChannel/bleu.glb",
        boxModelUrl: "/models/BleudeChannel/bleuBox.glb",
    },
    {
        id: "3",
        name: "Sauvage",
        brand: "Dior",
        description: "A radically fresh composition, dictated by a name that has the ring of a manifesto. Raw and noble all at once. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot. Ambroxan, derived from precious ambergris, unleashes a powerfully woody trail.",
        price: 145,
        sizes: [60, 100, 200],
        category: "MEN",
        scentFamily: "AROMATIC WOODY",
        topNotes: "Calabrian Bergamot, Pepper",
        middleNotes: "Sichuan Pepper, Lavender, Patchouli",
        baseNotes: "Ambroxan, Cedar, Labdanum",
        modelUrl: "/models/DiorSauvage/sauvage_perfume.glb",
        boxModelUrl: "/models/DiorSauvage/sauvageBox.glb",
    },
    {
        id: "4",
        name: "Hugo Man",
        brand: "Hugo Boss",
        description: "An iconic fragrance for the man who pushes the boundaries. Fresh, bold, and masculine. Features crisp green apple and vibrant herbal notes.",
        price: 95,
        sizes: [75, 125, 200],
        category: "MEN",
        scentFamily: "AROMATIC GREEN",
        topNotes: "Green Apple, Mint, Lavender, Grapefruit",
        middleNotes: "Sage, Geranium, Carnation, Jasmine",
        baseNotes: "Fir, Cedar, Patchouli",
        modelUrl: "/models/Hugo/hugo_bottle.glb",
        boxModelUrl: "/models/Hugo/hugo_box.glb",
    },
    {
        id: "5",
        name: "Hugo Woman",
        brand: "Hugo Boss",
        description: "A fruity, floral fragrance with an unexpected boyish twist. Blends naturally sourced ingredients with innovative molecules.",
        price: 85,
        sizes: [50, 75, 125],
        category: "WOMEN",
        scentFamily: "FLORAL FRUITY",
        topNotes: "Boysenberry, Italian Mandarin, Grass",
        middleNotes: "Jasmine, Black Tea, Plum, Iris",
        baseNotes: "Amber, Sandalwood, Cedar",
        modelUrl: "/models/Hugo/hugo_woman_bottle.glb",
        boxModelUrl: "/models/Hugo/hugo_woman_box.glb",
    },
    {
        id: "6",
        name: "Addict",
        brand: "Dior",
        description: "Dior Addict is a floral-oriental fragrance with a passionate and intuitive personality. The head note features the Silk Tree Flower, Mandarin Leaf and Orange Blossom. The heart note is the Queen of the Night, a rare flower that blooms only for a few hours. The base note is Bourbon Vanilla.",
        price: 130,
        sizes: [30, 50, 100],
        category: "WOMEN",
        scentFamily: "ORIENTAL FLORAL",
        topNotes: "Silk Tree Flower, Mandarin Leaf, Orange Blossom",
        middleNotes: "Queen of the Night Flower, Rose, Jasmine",
        baseNotes: "Bourbon Vanilla, Sandalwood, Tonka Bean",
        modelUrl: "/models/DiorAdict/diorAdict.glb",
    }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
