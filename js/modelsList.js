let modelsList = [
  {
    id: 1,
    name: "Iphone 12",
    img: "img/marcas/iphone12.white.jpg",
    prices: [4000, 4000, 4000],
    sizes: ["", "", ""],
    description:"iPhone 12 Apple (68GB),(128GB) Branco, Tela de 6,1 , 4G e Câmera de 12 MP.",
  },
  {
    id: 2,
    name: "Iphone 12",
    img: "img/marcas/iphone12.jpg",
    prices: [4100, 4100, 4100],
    sizes: ["", "", ""],
    description:"iPhone 12 Apple (68GB),(128GB) Preto, Tela de 6,1 , 4G e Câmera de 12 MP.",
  },
  {
    id: 3,
    name: "Iphone 12",
    img: "img/marcas/iphone12.blue.jpg",
    prices: [3654.25, 3654.25, 3654.25],
    sizes: ["", "", ""],
    description:"Subway Blue.",
  },
  {
    id: 4,
    name: "Iphone 12",
    img: "img/marcas/iphone12.red.jpg",
    prices: [3654.25, 3654.25, 3654.25],
    sizes: ["", "", ""],
    description:"iPhone 12 Apple (128GB) Vermelho, Tela de 6,1 , 4G e Câmera de 12 MP.",
  },
  {
    id: 5,
    name: "Iphone 13 Pro",
    img: "img/marcas/iphone13.gold.jpg",
    prices: [10799.00, 10799.00, 10799.00],
    sizes: ["", "", ""],
    description:"iPhone 13 Pro Max Apple (68GB),(128GB) Dourado, Tela de 6,7”, 5G e Câmera Pro de 12 MP.",
  },
  {
    id: 6,
    name: "Iphone 13 Pro",
    img: "img/marcas/iphone13.cinza.jpg",
    prices: [10799.00, 10799.00, 10799.00],
    sizes: ["", "", ""],
    description:"iPhone 13 Pro Max Apple (128GB) Grafite, Tela de 6,7”, 5G e Câmera Pro de 12 MP.",
  },
  {
    id: 7,
    name: "Iphone 13 Pro",
    img: "img/marcas/iphone13.white.jpg",
    prices: [10799.00, 10799.00, 10799.00],
    sizes: ["", "", ""],
    description:"iPhone 13 Pro Max Apple (128GB) Prateado, Tela de 6,7”, 5G e Câmera Pro de 12 MP.",
  },
  {
    id: 8,
    name: "Iphone 13 Pro",
    img: "img/marcas/iphone13.blue.jpg",
    prices: [11799.00, 11799.00, 11799.00],
    sizes: ["", "", ""],
    description:"iPhone 13 Apple (512GB) Azul, Tela de 6,1, 5G e Câmera Dupla de 12MP.",
  },
  {
    id: 9,
    name: "Capa para Iphone 12",
    img: "img/marcas/capa12.vidro.jpg",
    prices: [205.83, 74.99, 74.99],
    sizes: ["none", "none", "none"],
    description:"Capa para iPhone 12 Crystal-X de Vidro e TPU Fumê - Laut - LT-IP19MCXUBI.",
  },
  {
    id: 10,
    name: "Capa para Iphone 12",
    img: "img/marcas/capa12.sili.jpg",
    prices: [459.90, 459.90, 459.90],
    sizes: ["none", "none", "none"],
    description:"Capa para iPhone 12 Pro Max de Silicone Preta - Apple - MX002ZM/A.",
  },
  {
    id: 11,
    name: "Capa para Iphone 12",
    img: "img/marcas/capa12.clear.jpg",
    prices: [498.44, 498.44, 498.44],
    sizes: ["none", "none", "none"],
    description:"Capa para iPhone 12 Pro Max Clear Case de Policarbonato Transparente - Apple - MX0H2ZM/A. ",
  },
  {
    id: 12,
    name: "Capa para Iphone 12",
    img: "img/marcas/capa12.silila.jpg",
    prices: [305.91, 305.91, 305.91],
    sizes: ["none", "none", "none"],
    description:"Capa para iPhone 12 Pro de Silicone Laranja - Apple - MWYQ2ZM/A.",
  },
  {
    id: 13,
    name: "Notebook XPS 13",
    img: "img/marcas/Dell-XPS-13-Black.jpg",
    prices: [9999.00, 9999.00, 9999.00],
    sizes: ["none", "none", "none"],
    description:"11ª geração de Intel® Core™ i7-1185G7, Memória de 16GB, SSD de 1TB PCIe NVMe M.2, Tela 13.4” (1920x1200),Peso inicial de 1,20 kg.",
  },
  {
    id: 14,
    name: "Notebook Gamer GIGABYTE",
    img: "img/marcas/ntgamer.itc5.jpg",
    prices: [8299.90, 8299.90, 8299.90],
    sizes: ["none", "none", "none"],
    description:"Notebook Gamer GIGABYTE G5 - GeForce RTX 3050 Ti, Intel Core i5-11400H, 16GB RAM, SSD 512GB, 15.6 FHD 144Hz - MD-51BR123SD.",
  },
  {
    id: 15,
    name: "Notebook Gamer Acer Nitro",
    img: "img/marcas/ntgamer.acer.jpg",
    prices: [5499.90, 5499.90, 5499.90],
    sizes: ["none", "none", "none"],
    description:"Notebook Gamer Acer Nitro 5 Intel Core i5-10300H, GeForce GTX 1650, 8GB RAM, 512GB SSD, 15.6 IPS FHD, Win 11 Home, Preto - AN515-55-59T4.",
  },
  {
    id: 16,
    name: "Notebook Lenovo Ultrafino",
    img: "img/marcas/nt.lenovo.jpg",
    prices: [3199,90, 3199,90, 3199,90],
    sizes: ["none", "none", "none"],
    description:"Notebook Lenovo Ultrafino Ideapad Ryzen 5-5500U, 8GB, 256GB SSD, 15.6 Full HD, Linux, Cinza - 82MFS00100.",
  },
  {
    id: 17,
    name: "Notebook Lenovo IdeaPad",
    img: "img/marcas/nt.ideapad.jpg",
    prices: [2109.99, 341.99, 341.99],
    sizes: ["none", "none", "none"],
    description:"Notebook Lenovo IdeaPad 3i Intel Celeron N4020 Dual Core, 4GB, HD 500GB, Linux, 15.6, Prata - 82BUS00000.",
  },
  {
    id: 18,
    name: "Fone de Ouvido Bluetooth Razer",
    img: "img/marcas/fn.tooth.jpg",
    prices: [599.90, 599.90, 599.90],
    sizes: ["none", "none", "none"],
    description:"Fone de Ouvido Bluetooth Razer Hammerhead True Wireless, Recarregável, Resistente a Água - RZ12-02970100-R3U1.",
  },
  {
    id: 19,
    name: "Headset Gamer Corsair Void Elite Wireless",
    img: "img/marcas/fn.elite.jpg",
    prices: [1010,47, 1010,47, 1010,47],
    sizes: ["none", "none", "none"],
    description:"Headset Gamer Corsair Void Elite Wireless, RGB, 7.1 Surround, Drivers 50mm, Branco - CA-9011202-NA.",
  },
  {
    id: 20,
    name: "Apple Studio Display",
    img: "img/marcas/apple.studio.jpg",
    prices: [17999,00, 17999,00, 17999,00],
    sizes: ["none", "none", "none"],
    description:"Tela Retina 5K de 27 polegadas. Câmera ultra-angular de 12 MP com Palco Central. Microfones com qualidade de estúdio. Sistema de som com seis alto-falantes e Áudio Espacial..",
  },
];
