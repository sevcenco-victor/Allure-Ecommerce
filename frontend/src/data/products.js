const products = [
  {
    id: 1,
    title: "AMen's Casual Shirt",
    images: [
      'https://i.ibb.co/DLx2KQm/image.jpg',
      'https://i.ibb.co/vXJzBT9/test-large-img.jpg',
    ],
    category: 'Books',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'XL'],
    price: 120,
  },
  {
    id: 2,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 3,
    title: 'CUnisex Sneakers',
    images: [
      'https://i.ibb.co/zrrsyf3/image.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-atxk1EnmwE3z0q5MQrP6oiAAog7Hw_C3kwfJXXnUXZdeFO6F-bF-CKpCECDFCwt3II&usqp=CAU',
    ],
    category: 'Sneakers',
    rating: 4,
    reviewNum: 200,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Black', 'White', 'Gray'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    price: 33,
  },
  {
    id: 4,
    title: "DMen's Casual Shirt",
    images: [
      'https://i.ibb.co/8YyFsd5/image.jpg',
      'https://www.badmaash.com/cdn/shop/files/4M6A1596.jpg?v=1686829359',
    ],
    category: 'Shirt',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 120,
  },
  {
    id: 5,
    title: "AMen's Casual Shirt",
    images: [
      'https://i.ibb.co/DLx2KQm/image.jpg',
      'https://www.badmaash.com/cdn/shop/files/4M6A1596.jpg?v=1686829359',
    ],
    category: 'Most-Wanted',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 120,
  },
  {
    id: 6,
    category: 'Woman',
    title: "AWomen's Summer Dress",
    images: [
      'https://i.ibb.co/DK1q8mS/image.jpg',
      'https://media-photos.depop.com/b1/37696371/1713122871_299cd6d72cf3404a8cc7a73c8b554e84/P0.jpg',
    ],
    rating: 5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 7,
    title: 'CUnisex Sneakers',
    images: [
      'https://i.ibb.co/zrrsyf3/image.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-atxk1EnmwE3z0q5MQrP6oiAAog7Hw_C3kwfJXXnUXZdeFO6F-bF-CKpCECDFCwt3II&usqp=CAU',
    ],
    category: 'Most-Wanted',
    rating: 4,
    reviewNum: 200,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Black', 'White', 'Gray'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    price: 33,
  },
  {
    id: 8,
    title: 'Casual Shirt',
    images: [
      'https://i.ibb.co/8YyFsd5/image.jpg',
      'https://www.badmaash.com/cdn/shop/files/4M6A1596.jpg?v=1686829359',
    ],
    category: 'Shirt',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 120,
  },
  {
    id: 9,
    title: 'Casual Shirt',
    images: [
      'https://i.ibb.co/8YyFsd5/image.jpg',
      'https://www.badmaash.com/cdn/shop/files/4M6A1596.jpg?v=1686829359',
    ],
    category: 'Shirt',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 120,
  },
  {
    id: 10,
    title: 'Casual Shirt',
    images: [
      'https://i.ibb.co/8YyFsd5/image.jpg',
      'https://www.badmaash.com/cdn/shop/files/4M6A1596.jpg?v=1686829359',
    ],
    category: 'Shirt',
    rating: 4.5,
    reviewNum: 120,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Blue', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: 120,
  },
  {
    id: 11,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 12,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 13,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 14,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 15,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 16,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 17,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 18,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
  {
    id: 19,
    category: 'Woman',
    title: 'Silk Habotai Backless Maxi Dress',
    images: [
      'https://i.ibb.co/2gdDQgk/img6.jpg',
      'https://i.ibb.co/hZTksNr/img2.jpg',
      'https://i.ibb.co/y5mwgmv/img4.jpg',
      'https://i.ibb.co/Q6wVSjY/img5.jpg',
      'https://i.ibb.co/2Mb0Qvn/img3.jpg',
      'https://i.ibb.co/p1nzRBQ/img1.jpg',
    ],
    rating: 4.5,
    reviewNum: 80,
    details: {
      description:
        'A customer favorite returns in a warm-weather ready fabric. This charming maxi dress is cut from a twill woven from silky viscose rayon and softly structured hemp, the better to emphasize its flowing cape-like construction.',
      trapezFit:
        'Cut for a flowing, A-line fit. No waist definition. Crew neck with zip and hook-and-eye closure at back.',
      fabricAndCare:
        '66% viscose rayon, 34% hemp. Machine wash, lay flat to dry.',
    },
    colors: ['Red', 'Green', 'Yellow'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    price: 99,
  },
];
export default products;
