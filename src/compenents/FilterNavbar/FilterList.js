import { nanoid } from "nanoid";
const FilterList = [
  {
    id: nanoid(),
    title: "Küçük Evler",
    img: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
  {
    id: nanoid(),
    title: "Denize Sıfır",
    img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    id: nanoid(),
    title: "Olağanüstü",
    img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    id: nanoid(),
    title: "Göl Kenarı",
    img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    id: nanoid(),
    title: "Kulübeler",
    img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    id: nanoid(),
    title: "Özel odalar",
    img: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    id: nanoid(),
    title: "Güzel Manzaralar",
    img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    id: nanoid(),
    title: "Tekneler",
    img: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
  },
  {
    id: nanoid(),
    title: "Popüler",
    img: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    id: nanoid(),
    title: "Şatolar",
    img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  },
  {
    id: nanoid(),
    title: "Malikaneler",
    img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    id: nanoid(),
    title: "Üçgen Evler",
    img: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
  },
  {
    id: nanoid(),
    title: "Luxe",
    img: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    id: nanoid(),
    title: "Muhteşem Havuzlar",
    img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    id: nanoid(),
    title: "Kubbeler",
    img: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
  },
  {
    id: nanoid(),
    title: "Çiftlikler",
    img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    id: nanoid(),
    title: "Kayak",
    img: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
  },
  {
    id: nanoid(),
    title: "Tasarım",
    img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
  {
    id: nanoid(),
    title: "Kırsal",
    img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    id: nanoid(),
    title: "Küçük Evler",
    img: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
  },
  {
    id: nanoid(),
    title: "Denize Sıfır",
    img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    id: nanoid(),
    title: "Olağanüstü",
    img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    id: nanoid(),
    title: "Göl Kenarı",
    img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    id: nanoid(),
    title: "Kulübeler",
    img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    id: nanoid(),
    title: "Özel odalar",
    img: "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    id: nanoid(),
    title: "Güzel Manzaralar",
    img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    id: nanoid(),
    title: "Tekneler",
    img: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
  },
  {
    id: nanoid(),
    title: "Popüler",
    img: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    id: nanoid(),
    title: "Şatolar",
    img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  },
  {
    id: nanoid(),
    title: "Malikaneler",
    img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
  },
  {
    id: nanoid(),
    title: "Üçgen Evler",
    img: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
  },
  {
    id: nanoid(),
    title: "Luxe",
    img: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    id: nanoid(),
    title: "Muhteşem Havuzlar",
    img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    id: nanoid(),
    title: "Kubbeler",
    img: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
  },
  {
    id: nanoid(),
    title: "Çiftlikler",
    img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    id: nanoid(),
    title: "Kayak",
    img: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
  },
  {
    id: nanoid(),
    title: "Tasarım",
    img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
  {
    id: nanoid(),
    title: "Kırsal",
    img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
];
export default FilterList;
