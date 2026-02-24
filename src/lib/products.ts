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
    }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
