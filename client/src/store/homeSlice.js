import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // ! creé arreglos falsos. Reemplazar
    bestSellers: [{
        "id": 12,
        "brand": "maybelline",
        "name": "Maybelline Illegal Length Fiber Extensions Mascara",
        "price": "11.49",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/086bd6bba51f630f60511cdc24c68096_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Build 4mm of measurable extensions! Features: Fiber-fix brush has 6 different contact points with each lash for optimal fiber placementBreakthrough formula contains fibers up to 4mm in lengthSealing formula stretches lashes and seals fibers to lashesWashable, also available in waterproof formula \nFor Best Results: Extend lashes upward with Fiber-Fix brush, from root to tip. \nOnly a few strokes necessary. For best results, do not let dry between \ncoats.  Removes easily with soap and water or Maybelline® Expert Eyes® \n100% Oil-Free Eye Makeup Remover.\n",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:59.587Z",
        "updated_at": "2017-12-23T20:31:48.155Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          }
        ]
      },
      {
        "id": 11,
        "brand": "maybelline",
        "name": "Maybelline Volum' Express The Rocket Mascara",
        "price": "10.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/0b04408a84154f14800e4c9477f8a924_ra,w158,h184_pa,w158,h184.png",
                        "description": "Explosive Volume in Rocket Time! 8X Bigger, Smoother.\n\nNow, the most explosive, beautiful lashes ever! Maybelline's patented supersonic \nbrush with micro bristles loads on big, sleek volume instantly.\n\nThe fast-glide formula keeps lashes smooth. Zero clumps!",
        "rating": null,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:58.856Z",
        "updated_at": "2017-12-23T20:31:47.966Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          },
          {
            "hex_value": "#202020",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 10,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Voluminous Million Lashes Mascara",
        "price": "13.29",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/7a372820b4a151ec62a6ce4261948421_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "For lashes that \nlook a million times multiplied and perfectly defined, there's only one \nmascara - Voluminous® Million Lashes™. The built-in Clean Sweep \nWiping System wipes the brush free of clumps leaving the perfect amount \nof mascara for an ultra-volumized clean lash look. The Millionizing \nBrush evenly thickens lashes from root to tip. The result? Lashes look \nso multiplied, so clean, it's like seeing millions. Features: \nOphthalmologist-tested and allergy-testedSuitable for sensitive eyes an contact len wearersClump-free.Fragrance-free\n                                                 ",
        "rating": 4.6,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:57.744Z",
        "updated_at": "2017-12-23T20:31:49.446Z",
                        "product_colors": [
          {
            "hex_value": "#030001",
            "colour_name": "Blackest Black "
          },
          {
            "hex_value": "#231F20",
            "colour_name": "Black "
          },
          {
            "hex_value": "#4D2C00",
            "colour_name": "Black Brown "
          },
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          }
        ]
      },
      {
        "id": 9,
        "brand": "maybelline",
        "name": "Maybelline Great Lash Lots of Lashes Mascara",
        "price": "7.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/dfaf77464a8cb52a1a8f2a15e8abf920_ra,w158,h184_pa,w158,h184.png",
                        "description": "Introducing a Great Lash innovation - Great Lash Lots of Lashes!The favourite Maybelline mascara now gives the look of more lashes than ever, thanks to the exclusive Great Little Grabber Brush. In just one swipe, the Grabber Brush easily reaches all lashes - even \nin the corners - for a multiplied lash look without the clumps. The result? Great lashes with lots of impact and not a lot of work.For best results: sweep brush from root to \ntip of lashes. Continue building volume until the desired lash look is \nachieved. Do not let dry between coats. Removes easily with soap and \nwater or eye makeup remover. \n                    ",
        "rating": 4.2,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:56.475Z",
        "updated_at": "2017-12-23T20:31:47.757Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          },
          {
            "hex_value": "#2d1e17",
            "colour_name": "Brownish Black "
          }
        ]
      },
      {
        "id": 8,
        "brand": "maybelline",
        "name": "Maybelline Lash Stiletto Ultimate Length Mascara",
        "price": "10.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/812b5ae27df9be983052063d52d7ab7a_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "The only mascara that does for lashes what stilettos do for legs.\n\n    The Grip & Extend brush grasps each lash and coats from every angle\n    Elastic formula stretches lashes for provocative length\n    Pro-Vitamin B-5 formula conditions and smoothes for black-patent shine\n    Contact lens safe and Ophthalmologist tested\n    Waterproof \n\n ",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:55.406Z",
        "updated_at": "2017-12-23T20:31:47.606Z",
                        "product_colors": [
          {
            "hex_value": "#0E0F11",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 7,
        "brand": "maybelline",
        "name": "Maybelline Volum'Express the Falsies Mascara",
        "price": "9.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/af1f35f15ee64cc1003f1ccfc6451d71_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "False lash glam in a tube, instantly!The Falsies Mascara delivers a false lash look, giving you a full set of voluminous, bold, fanned-out lashes and the appearance of no gaps from any angle.The Pro-Keratin Fiber enriched formula is designed to deliver immediate results, distributing volume and visible intensity to your lashes. The spoon-shaped brush helps fan lashes out.The Falsies Mascara is designed to give the appearance of no gaps and spaces. In a wink, lashes you didn’t even know you had look visibly thickened!",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:54.660Z",
        "updated_at": "2017-12-23T20:31:47.473Z",
                        "product_colors": [
          {
            "hex_value": "#0E0F11",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 6,
        "brand": "covergirl",
        "name": "CoverGirl Lashblast Volume Blasting Mascara ",
        "price": "9.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/18790b1fce6ddd2c7c20e73ce964eadd_ra,w158,h184_pa,w158,h184.jpg",
                        "description": "Get a blast of lush, volumized lashes! LashBlast’s patented \nvolume-boosting formula and patent-pending brush are designed to max-out\n each and every lash, leaving you with the ultimate big lash look.Features: Instant volume and fullnessSmudge and smear-proofHypoallergenic and suitable for contact lens wearers",
        "rating": 4.8,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:53.573Z",
        "updated_at": "2017-12-23T20:31:47.348Z",
                        "product_colors": []
      },
      {
        "id": 5,
        "brand": "pacifica",
        "name": "Pacifica Stellar Gaze Length & Strength Mineral Mascara",
        "price": "28.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/b4a5f31a499b42938980fb369d0213ab_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "You will fall in love with Pacifica's long lasting, nourishing, natural mineral\n mascara.  This amazing formula is infused with coconut oil and vitamin B\n to hydrate each lash as it lengthens, strengthens and adds volume. \nApply for a natural look by day, or layer for more volume with the super\n plush 100% vegan brush that provides effortless coverage.100% vegan. Cruelty-free. Formulated without FD & C color, parabens, talc and mineral oil.\nRead our blog post for tips on how to Green & Clean your makeup bag.  Ingredients: Aqua, glycerin (vegetable), glyceryl stearate se, jojoba \nesters, tapioca starch, stearic acid ( vegetable), copernicia cerfera \n(carnauba) wax, euphorbia cerifera (candelilla) wax, arabic/acacia gum, \nacrylates, crosspolymer, potassium cetyl phosphate, microcrystalline \ncellulse (plant), cocos nucifera (coconut) oil, panthenol (vitamin b), \ncellulose gum, gluconolactone, macrocystis pyifera (brown kelp) extract,\n hydrolyzed oryza sativa (rice) protein, sodium benzoate, iron oxides c1\n 77499.",
        "rating": 4.2,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Vegan"
        ],
        "created_at": "2016-10-01T18:10:52.756Z",
        "updated_at": "2017-12-23T20:31:47.230Z",
                        "product_colors": []
      },
      {
        "id": 4,
        "brand": "physicians formula",
        "name": "Physicians Formula Organic Wear FakeOut Mascara",
        "price": "15.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/2b3d5588b073bfae89c6308dcfe96436_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Physicians Formula Organic Wear FakeOut Mascara is the 1st EVER mascara with 100% natural origin lash extension fibers for the full-on fringe of false lashes without irritation.The innovative formula amplifies lash volume, length & curl. Plus the oversized brush creates a fabulously false lash effect instantly!Features:  100% of the Total Ingredients are from Natural Origin  70% of the Total Ingredients are from Organic FarmingDirections: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water*, Glycerin*, Glyceryl \nStearate SE, Beeswax*, Microcrystalline Cellulose, Copernicia Cerifera \n(Carnauba) Wax*, Tapioca Starch*, Hydrolyzed Corn Starch, Stearic Acid, \nJojoba Esters, Oryza Sativa (Rice) Powder*, Oryza Sativa (Rice) \nExtract*, Ceiba Pentandra Fiber Powder, Cellulose, Nylon-10/10, Aloe \nBarbadensis Leaf Extract*, Cucumis Sativus (Cucumber) Fruit Extract*, \nGlycine Soja (Soybean) Oil*, Olea Europaea (Olive) Leaf Extract*, \nGlycerin, Magnesium Aluminum Silicate, Water, Glyceryl Caprylate, \nLeuconostoc / Radish Root Ferment Filtrate May Contain: Iron Oxides, \nTitanium Dioxide* Ingredients from Organic FarmingHypoallergenic.  Fragrance Free. Safe for Sensitive Eyes and Contact Lens Wearers.  Ophthalmologist Approved.",
        "rating": 3.9,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Gluten Free"
        ],
        "created_at": "2016-10-01T18:10:51.387Z",
        "updated_at": "2017-12-23T20:31:47.075Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Ultra Black (7883C) "
          },
          {
            "hex_value": "#2d2d2d",
            "colour_name": "Black (7884C) "
          }
        ]
      },
      {
        "id": 3,
        "brand": "physicians formula",
        "name": "Physicians Formula Organic Wear Lash Boosting Mascara",
        "price": "15.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/ca3136ce9bff5df45b34b25b3bbf99aa_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Physicians Formula Organic Wear Lash Boosting Mascara is the 1st Ever 100% Natural Lash Boosting formula enhances the appearance of \nlash length, thickness and volume for dramatic lashes instantly and \nlong-term.Additional Features:100% of the Total Ingredients are from Natural Origin.  44% of the Total Ingredients are from Organic Farming.  100% saw enhanced lashes INSTANLY!Delivers ingredients to the base of lashes for  best results!93% saw thicker & longer looking lashes instantly!  92% saw \nextended & fuller looking lashes after 4 weeks!  *Based on \nindividual perception of results of a panel of women wearing Organic \nWear Lash Boosting Mascara.Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for \nadded volume. Can easily be washed off with soap and water or removed \nwith Physicians Formula Eye Makeup Remover Pads or Lotions.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water *, Glycerin, Iron Oxides, \nMicrocrystalline Cellulose, Glyceryl Stearate SE, Water, Lactobacillus \nBulgaricus Ferment Filtrate, Beeswax *, Jojoba Esters, Copernicia \nCerifera (Carnauba) Wax *, Tapioca Starch *, Stearic Acid, Glyceryl \nCaprylate, Aloe Barbadensis Leaf Juice *, Cellulose Gum, Cucumis Sativus\n (Cucumber) Fruit Extract *, Glycine Soja (Soybean) Oil *, Hydrolyzed \nOryza Sativa (Rice) Protein, Magnesium Aluminum Silicate, Olea Europaea \n(Olive) Leaf Extract *, Saccharomyces/Copper Ferment, Saccharomyces/Iron\n Ferment, Saccharomyces/Magnesium Ferment, Saccharomyces/Silicon \nFerment, Saccharomyces/Zinc Ferment, Leuconostoc/Aloe Barbadensis \nLeaf/Sorbus Aucuparia Fruit Ferment Filtrate, Leuconostoc/Radish Root \nFerment Filtrate, Populus Tremuloides Bark Extract, Citric Acid  May \nContain: Titanium DioxideHypoallergenic. Fragrance free. Ophthalmologist approved.  Gluten Free.",
        "rating": 3.7,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Gluten Free"
        ],
        "created_at": "2016-10-01T18:10:50.417Z",
        "updated_at": "2017-12-23T20:31:46.951Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Ultra Black Organics (7561C) "
          },
          {
            "hex_value": "#282828",
            "colour_name": "Black Organics (7562C) "
          }
        ]
      },
      {
        "id": 2,
        "brand": null,
        "name": "L' Oreal Paris Voluminous Mascara",
        "price": "9.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/4d671a9af4d2ce8d310ae263569018fb_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Voluminous - Volume Building Waterproof Mascara’s unique waterproof formula builds lashes to four times their natural thickness. Patented Volume-Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Uniquely formulated to resist clumping, soften lashes, and build lashes to four times their natural thickness, with waterproof wear. Patented Volume Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Ophthalmologist-tested and allergy-tested.Suitable for sensitive eyes and contact lens wearers.Clump-resistant.Fragrance-free.All-day wear.Ingredients:ISODODECANE • AQUA / WATER / EAU • CERA ALBA / BEESWAX / CIRE D'ABEILLE • DISTEARDIMONIUM HECTORITE • CARNAUBA / CARNAUBA WAX / CIRE DE CARNAUBA • PARAFFIN • ALCOHOL DENAT • ALLYL STEARATE/VA COPOLYMER • VA/VINYL BUTYL BENZOATE/CROTONATES COPOLYMER • PROP",
        "rating": 4.5,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:10:49.185Z",
        "updated_at": "2017-12-23T20:31:46.436Z",
                        "product_colors": [
          {
            "hex_value": "#231F20",
            "colour_name": "Black "
          },
          {
            "hex_value": "#4D2C00",
            "colour_name": "Black Brown "
          },
          {
            "hex_value": "#030000",
            "colour_name": "Carbon Black "
          }
        ]
      },
      {
        "id": 1,
        "brand": "pure anada",
        "name": "Pure Anada Natural Mascara",
        "price": "14.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/afefede002b8d94f6e53ea07dd4070f9_ra,w158,h184_pa,w158,h184.jpg",
                        "description": "Finally, a natural mascara you can feel good about putting on your lashes!\nIt is naturally paraben-free, gluten-free, and mercury-free. \nYou will be amazed at how well this mascara builds volume and length to your lashes.\nThis is the natural mascara you’ve been waiting for!Ingredients: Aqua (Water), Oryza Sativa Wax (Rice Bran Wax), Olea Europea fruit oil \n(Olive Oil), Vegetable Source Cetyl Alcohol (Coconut), Coernica Cerifera\n (Carnauba Wax), Euphorbia Cerifera (Candelilla Wax), Vegetable \nGlycerin, Stearic Acid, Acacia Gum, Black Iron oxide (CI 77499),  \nAminomethyl Popandiol (Ph Adjuster), Phenoxyethanol (Preservative).",
        "rating": 4.6,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Gluten Free",
          "Canadian"
        ],
        "created_at": "2016-10-01T18:10:46.893Z",
        "updated_at": "2017-12-23T20:31:46.013Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Black "
          },
          {
            "hex_value": "#3E2829",
            "colour_name": "Brown "
          }
        ]
      }],
    newArrivals: [{
        "id": 25,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Extra Volume Collagen Mascara",
        "price": "13.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/7bcefaf1f12f609b2d3d1df2cfbcf6db_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "L'Oreal's biggest volume builder! Introducing the latest innovation in mascara technology--Extra Volume Collagen Mascara. It's made with hydra-collagen and enhances the thickness of your lashes for up to 12x more impact without any clumps. Our patented brush is 50% bigger so it builds that incredible volume fast. Your lashes will build extra body and extra impact in just one sweep.",
        "rating": 4.8,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:15.531Z",
        "updated_at": "2017-12-23T20:31:51.184Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          }
        ]
      },
      {
        "id": 24,
        "brand": "almay",
        "name": "Almay One Coat Thickening Mascara",
        "price": "10.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/a49009aa8bdc3aab2b07a78fbfe0bcb8_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Almay One Coat Thickening Mascara gives you up to 100% thicker lashes in one smooth, even coat. This volumizing formula builds lashes double thick in one quick, clump-free application. Nourishing formula is infused with aloe and vitamin B5 to help keep lashes conditioned and silky. Extra gentle, non irritating formula.Hypoallergenic. Ophthalmologist tested.",
        "rating": 4.1,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:14.234Z",
        "updated_at": "2017-12-23T20:31:51.052Z",
                        "product_colors": [
          {
            "hex_value": "#262633",
            "colour_name": "Black "
          },
          {
            "hex_value": "#413025",
            "colour_name": "Black Brown "
          }
        ]
      },
      {
        "id": 23,
        "brand": "maybelline",
        "name": "Maybelline Great Lash Big Mascara",
        "price": "7.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/0795abd7feaf855f88055e181652d65a_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Live Big! Great Lash Big has a Bigger Brush for Great Big Live-It-Up Lashes!\n\nThe Great Big Brush provides a bigger, bolder lash effect\nGreat buildable formula still conditions as it thickens with even greater intensity\nNo clumps or globs\n",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:13.293Z",
        "updated_at": "2017-12-23T20:31:49.724Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          },
          {
            "hex_value": "#120C0A",
            "colour_name": "Brownish Black "
          },
          {
            "hex_value": "#0E0F11",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 22,
        "brand": "e.l.f.",
        "name": "e.l.f. Studio Mineral Infused Mascara",
        "price": "4.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/be704396ee7b24ec4783787df9be1eeb_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "e.l.f. Studio Mineral Infused Mascara creates fuller, healthier looking \nlashes.  Enhance lashes for a naturally thicker and more volumized look.\n  The long-wear formula and unique silicone brush creates a clump free \nand defined application for gorgeous lashes all day.Ingredients: Aqua (Water), Caprylic/Capric Triglyceride, Cera Carnauba (Carnauba) \nWax, Synthetic Beeswax, Styrene/Acrylates/Ammonium Methacrylate \nCopolymer, Stearic Acid, Cetyl Alcohol, Glyceryl Stearate SE, PVP, \nTriethanolamine , Triacontanyl PVP, Hydroxyethyl Cellulose, Caprylyl \nGlycol, Phenoxyethanol, Potassium Sorbate\nMay Contain: Iron Oxides (CI 77491 , CI 77492 , CI 77499), Manganese \nViolet (CI 77742) \n\n",
        "rating": 4.3,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Vegan"
        ],
        "created_at": "2016-10-01T18:11:11.865Z",
        "updated_at": "2017-12-23T20:31:48.648Z",
                        "product_colors": []
      },
      {
        "id": 21,
        "brand": null,
        "name": "Earth Lab Raw Mascara",
        "price": "24.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/823cecb5e0d139ff5a98c253aa68c876_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "This 100% natural, botanical based formula glides on effortlessly. You'll enjoy \nthe silky smooth application which easily separates lashes and the best part - No Clumping, No Flaking, No Smudging, No Toxic Chemicals and No Parabens!Ingredients: Water/Aqua, Natural Beeswax, Copernicia Cerifera (Carnauba) Wax, \nLecithin, Glyceryl Stearate, Glycerin, Xanthan Gum, Celluloses, Carthamus \nTinctorius (Safflower) Seed Oil, Aloe Barbadensis Leaf Extract, Jojoba (Simmondsia \nChinensis) Oil, Tocopherol, Chamomilla Recutita (Matricaria) Flower Extract, \nRosmarinus Officinalis (Rosemary) Leaf Extract, Cucumis Sativus (Cucumber) Fruit \nExtract, Phenoxyethanol, Silica, Mica, Iron OxidesRaw Mascara guaranteed 12 months sealed and expires within 3 months of opening.For usage tips for Earth Lab Raw Mascara read our blog post.  ",
        "rating": 4.1,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Canadian"
        ],
        "created_at": "2016-10-01T18:11:10.938Z",
        "updated_at": "2017-12-23T20:31:49.596Z",
                        "product_colors": []
      },
      {
        "id": 20,
        "brand": "maybelline",
        "name": "Maybelline Great Lash Mascara",
        "price": "7.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/6b4d354890177a73b4d6630d723c2f21_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Great Lash Waterproof Mascara conditions as it thickens lashes. The lash-doubling formula glides on smoothly to build great-looking smudge-proof lashes. The lash-building brush makes it easy to get a full lash look without clumps. Hypoallergenic and contact lens safe.\nAllure 2008 Reader's Choice Award Winner for drugstore mascara.\n",
        "rating": 4.2,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:09.921Z",
        "updated_at": "2017-12-23T20:31:50.950Z",
                        "product_colors": [
          {
            "hex_value": "#120C0A",
            "colour_name": "Brownish Black "
          },
          {
            "hex_value": "#0E0F11",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 19,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Double Extend Beauty Tubes",
        "price": "14.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/45fea1eb913d55d6e1586ea66c1c82a0_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Get the look of salon lash extensions with the new Double Extend Beauty Tubes Mascara! This new lash extension effect mascara visibly lengthens your lashes up to an astonishing 80%.Step 1: Ultra nourishing base coat infused with Ceramide R and D-Panthenol protects and strengthens lashes creating the perfect base for tube application.Step 2: Ultra-lengthening tube top coat sets to form lash-extending beauty tubes that visibly lengthen lashes to amazing new heights. Beauty tubes will not run, clump, flake or smudge and will stay on all-day.Step 3: Beauty tubes remove easily with just warm water – no makeup remover or rubbing required!\n\nClump-free length.\nSmudge-proof.\nFlake-proof.\nLong wear hold.\nOphthalmologist and allergy tested.\nSuitable for sensitive eyes and contact lens wearers.\nRemoves easily with plenty of warm water.\nFragrance-free.\n\n ",
        "rating": 4.6,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:08.654Z",
        "updated_at": "2017-12-23T20:31:50.835Z",
                        "product_colors": [
          {
            "hex_value": "#231F20",
            "colour_name": "Blackest Black "
          }
        ]
      },
      {
        "id": 18,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Telescopic Mascara",
        "price": "13.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/a5add7c57e2a69456749c0e8263175f7_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Want longer, more defined lashes in a single sweep?L'Oreal Paris introduces amazing new technology that lengthens lashes to the extreme and intensifies them at their base. It will change the way women think about lengthening mascara.It's the 1st spectacular stretch-effect mascara from L'Oreal Paris.The High-Precision Flexible Brush stretches the formula towards infinity for up to 60% longer lashes.",
        "rating": 4.7,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:07.999Z",
        "updated_at": "2017-12-23T20:31:50.715Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          }
        ]
      },
      {
        "id": 17,
        "brand": "suncoat",
        "name": "Suncoat Sugar-Based Mascara",
        "price": "16.49",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/04362753156bc96b10e1a3f16d585ff0_ra,w158,h184_pa,w158,h184.png",
                        "description": "This sugar-based natural mascara is another unique product from Suncoat. Made with natural sugar-based biopolymer, kaolin clay, earth pigments and enriched with Vitamin E, it naturally builds lash volume and length! It is a superior alternative for your sensitive eyes and for our environment!Features: Free of PVP (polyvinyl pyrrolidone polymer), acrylic copolymer, VA (vinyl acetate) polymerFree of fragrance, parabens, alcohol and glycolKind to sensitive eyesNaturally builds lash volume and lengthBiodegradable ingredientsVeganNot tested on animals Although NOT waterproof, this natural mascara has GREAT wear-ability. It resists smudging, but washes off easily with regular skin cleanser and water.Ingredients: Aqua (water), kaolin clay, vegetable glycerin, hydrolyzed Zee mays (corn) starch (natural sugar-based biopolymer), lecithin, Citrus grandis (grapefruit) seed extract, tocopherol (vitamin E), citric acid, pigments.",
        "rating": 3.4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Vegan",
          "Canadian"
        ],
        "created_at": "2016-10-01T18:11:07.137Z",
        "updated_at": "2017-12-23T20:31:50.499Z",
                        "product_colors": []
      },
      {
        "id": 16,
        "brand": "pacifica",
        "name": "Pacifica Aquarian Gaze Water-Resistant Mascara",
        "price": "21.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/5e9ec049ea72f7ec853bcdb996201dd7_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "This Pacifica Aquarian Gaze Water-Resistant and long wearing is a deep blue super lush natural mineral mascara. Amazing lengthening brush (100% \nvegan) makes your lashes insanely long and gorgeous as it separates to \nbuild volume. It is nourishing formula is infused with coconut oil, kelp\n extract and vitamin B to hydrate each lash as it lengthens and \nstrengthens.Features:Coconut Oil- Studies have shown coconut oil to be an excellent hair strengthener and moisturizer that can reduce breakagePanthenol (Vitamin B)- Helps strengthen and nourish hairKelp Extract- Moisturize and condition lashesView IngredientsFormulated without:\n Animal ingredients (including carmine, beeswax and lanolin), animal \ntesting. FD&C colors, mineral oil, parabens, phthalates, petroleum, \npropylene glycol, SLS, gluten, peanut oil and other ingredients you \ndon’t want on your skin.Ingredients: Water (Aqua), \nCopernicia cerifera (Carnauba) Wax (thickener), Euphorbia cerifera \n(Candelilla) Wax (thickener), Acrylates Crosspolymer, Butylene Glycol, \nStearic Acid, Glyceryl Stearate, Polyisobutene, Phenoxyethanol, \nHydroxyethylcellulose Sodium Hydroxide, Caprylyl Glycol, \nEthylhexylglycerin, Steareth-21, Cocos Nucifera (coconut) Oil, Panthenol\n (vitamin B), macrocystis pyrifera (kelp) extract, Sodium \nDehydroacetate, Disodium EDTA, Hexylene Glycol, Iron Oxides CI 77491, \n77492, CI 77499. ",
        "rating": 4.8,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Vegan"
        ],
        "created_at": "2016-10-01T18:11:04.325Z",
        "updated_at": "2017-12-23T21:08:53.407Z",
                        "product_colors": []
      },
      {
        "id": 15,
        "brand": "physicians formula",
        "name": "Physicians Formula Organic Wear 100% Natural Origin Mascara",
        "price": "15.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/78e3d20b744ec40691dd7357c9db6dd3_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Physicians Formula Organic Wear 100% Natural Origin Mascara's revolutionary 100% Natural Origin formula contains the purest \ningredients and provides 5x Lash Boosting for lash length, volume & \ndefinition naturally. 100% Recyclable Eco-Brush defines each lash with ultra-soft plastic bristles. 100% Free of Harsh Chemicals, Synthetic Preservatives, Parabens, Clumping, Smudging, Flaking, Fibers & Dyes.Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water*, Glycerin, \nIron Oxide, Microcrystalline Cellulose, Glyceryl Stearate, Water, \nBeeswax*,  Jojoba Esters, Tapioca Starch*, Copernicia Cerifera \n(Carnauba) Wax*, Stearic Acid, Glyceryl Caprylate, Aloe Barbadensis Leaf\n Juice*, Cellulose Gum, Cucumis Sativus (Cucumber) Fruit Extract*,  \nGlycine Soya (Soybean) Oil*, Hydrolyzed Oryza Sativa (Rice) Protein, \nLeuconostoc/Radish Root Ferment Filtrate, Magnesium Aluminum Silicate, \nOlea Europaea (Olive) Leaf Extract*. May Contain: Titanium Dioxide  \n*Produced from Organic Farming.Hypoallergenic.  Safe for Sensitive Eyes and Contact Lens Wearers.",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Gluten Free"
        ],
        "created_at": "2016-10-01T18:11:03.194Z",
        "updated_at": "2017-12-23T20:31:49.843Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Ultra Black Organics (1062C) "
          },
          {
            "hex_value": "#282828",
            "colour_name": "Black Organics (1063C) "
          }
        ]
      },
      {
        "id": 14,
        "brand": "maybelline",
        "name": "Maybelline Volum' Express Colossal Mascara",
        "price": "9.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/5d6e0d96f6dedbc3aadd88d9403cb26e_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Why You'll Love It\n\nCreates 9X the volume, instantly.\nPatented MegaBrush + Collagen Formula plump lashes one by one \nDramatic Volume with no clumps \nWashable \n",
        "rating": 4.5,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:01.516Z",
        "updated_at": "2017-12-23T20:31:48.510Z",
                        "product_colors": [
          {
            "hex_value": "#0D090A",
            "colour_name": "Classic Black "
          },
          {
            "hex_value": "#000000",
            "colour_name": "Glam Black "
          }
        ]
      },
      {
        "id": 13,
        "brand": "l'oreal",
        "name": "L'Oreal Paris Voluminous Volume Building Mascara",
        "price": "9.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/c9288fc106afdf3f7039a5128e0f621d_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "4X Fuller Lashes\n\n\nDramatic Volume Effect\n\n\nSeparates & Builds Every Lash\n\n\nPatented Volume Maximizing Brush\nL'Oreal presents Voluminous Volume Building Mascara. Uniquely formulated to resist clumping, soften lashes and build lashes to 4X their natural thickness.\n\n\nUnique maximizing formula quickly thickens and builds lashes in a single application for a full and dramatic lash look.\n\n\nPatented Volume Maximizing Brush thickens lashes evenly, smoothly leaving them soft with virtually no flakes, smudges or clumps.\n\n\nVoluminous with Panthenol and Ceramide-R protects and conditions lashes leaving them supple and soft to the touch, resisting clumping and flaking.\n\n\nOpththalmologist and allergy tested.\n\n\nSuitable for sensitive eyes and contact lens wearers.\n\n\nClump-resistant.\n\n\nFragrance-free.\n\n\nAll day wear.\n\n",
        "rating": 2.5,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:00.359Z",
        "updated_at": "2017-12-23T20:31:48.395Z",
                        "product_colors": [
          {
            "hex_value": "#262626",
            "colour_name": "Black "
          },
          {
            "hex_value": "#000000",
            "colour_name": "Carbon Black "
          }
        ]
      }],
    offers: [{
        "id": 23,
        "brand": "maybelline",
        "name": "Maybelline Great Lash Big Mascara",
        "price": "7.79",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/0795abd7feaf855f88055e181652d65a_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "Live Big! Great Lash Big has a Bigger Brush for Great Big Live-It-Up Lashes!\n\nThe Great Big Brush provides a bigger, bolder lash effect\nGreat buildable formula still conditions as it thickens with even greater intensity\nNo clumps or globs\n",
        "rating": 4,
        "category": null,
        "product_type": "mascara",
        "tag_list": [],
        "created_at": "2016-10-01T18:11:13.293Z",
        "updated_at": "2017-12-23T20:31:49.724Z",
                        "product_colors": [
          {
            "hex_value": "#000000",
            "colour_name": "Blackest Black "
          },
          {
            "hex_value": "#120C0A",
            "colour_name": "Brownish Black "
          },
          {
            "hex_value": "#0E0F11",
            "colour_name": "Very Black "
          }
        ]
      },
      {
        "id": 22,
        "brand": "e.l.f.",
        "name": "e.l.f. Studio Mineral Infused Mascara",
        "price": "4.99",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/be704396ee7b24ec4783787df9be1eeb_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "e.l.f. Studio Mineral Infused Mascara creates fuller, healthier looking \nlashes.  Enhance lashes for a naturally thicker and more volumized look.\n  The long-wear formula and unique silicone brush creates a clump free \nand defined application for gorgeous lashes all day.Ingredients: Aqua (Water), Caprylic/Capric Triglyceride, Cera Carnauba (Carnauba) \nWax, Synthetic Beeswax, Styrene/Acrylates/Ammonium Methacrylate \nCopolymer, Stearic Acid, Cetyl Alcohol, Glyceryl Stearate SE, PVP, \nTriethanolamine , Triacontanyl PVP, Hydroxyethyl Cellulose, Caprylyl \nGlycol, Phenoxyethanol, Potassium Sorbate\nMay Contain: Iron Oxides (CI 77491 , CI 77492 , CI 77499), Manganese \nViolet (CI 77742) \n\n",
        "rating": 4.3,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Vegan"
        ],
        "created_at": "2016-10-01T18:11:11.865Z",
        "updated_at": "2017-12-23T20:31:48.648Z",
                        "product_colors": []
      },
      {
        "id": 21,
        "brand": null,
        "name": "Earth Lab Raw Mascara",
        "price": "24.0",
        "price_sign": null,
        "currency": null,
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/823cecb5e0d139ff5a98c253aa68c876_ra,w158,h184_pa,w158,h184.jpeg",
                        "description": "This 100% natural, botanical based formula glides on effortlessly. You'll enjoy \nthe silky smooth application which easily separates lashes and the best part - No Clumping, No Flaking, No Smudging, No Toxic Chemicals and No Parabens!Ingredients: Water/Aqua, Natural Beeswax, Copernicia Cerifera (Carnauba) Wax, \nLecithin, Glyceryl Stearate, Glycerin, Xanthan Gum, Celluloses, Carthamus \nTinctorius (Safflower) Seed Oil, Aloe Barbadensis Leaf Extract, Jojoba (Simmondsia \nChinensis) Oil, Tocopherol, Chamomilla Recutita (Matricaria) Flower Extract, \nRosmarinus Officinalis (Rosemary) Leaf Extract, Cucumis Sativus (Cucumber) Fruit \nExtract, Phenoxyethanol, Silica, Mica, Iron OxidesRaw Mascara guaranteed 12 months sealed and expires within 3 months of opening.For usage tips for Earth Lab Raw Mascara read our blog post.  ",
        "rating": 4.1,
        "category": null,
        "product_type": "mascara",
        "tag_list": [
          "Natural",
          "Canadian"
        ],
        "created_at": "2016-10-01T18:11:10.938Z",
        "updated_at": "2017-12-23T20:31:49.596Z",
                        "product_colors": []
      }]


}

export const homeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        loadPagination: (state, { payload }) => {

            state.list = payload.list;
            state.next = payload.next;
        }
    }
})

// Action creators are generated for each case reducer function
export const { loadPagination } = homeSlice.actions
