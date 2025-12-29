const dishData = [
    // --- APPETIZERS ---
    { 
        name: "A10. PAPAYA SALAD WITH SHRIMP", 
        category: "Appetizers", 
        price: "$20", 
        description: "Papaya salad with shrimp.",
        note: "",
        image: "assets/img/appetizers/A10.jpg"
    },
    { 
        name: "A2. DEEP FRIED PORK DUMPLING (4)", 
        category: "Appetizers", 
        price: "$9", 
        description: "Deep fried pork dumpling.",
        note: "",
        image: "assets/img/appetizers/a2-dumpling.jpg"
    },
    { 
        name: "A1. FRIED EGG ROLL (4)", 
        category: "Appetizers", 
        price: "$9", 
        description: "Pork, cabbage, onion, carrot, egg.",
        note: "Related Dishes:\nA3. Fried Veggie Egg Roll (4) / $9\nA4. Fried Chicken Wing w/ Fries / $12\nA11. Fried Shrimp Tempura (5) / $9\nA13. Fried Veggie Mix Tempura / $8",
        image: "assets/img/appetizers/a1-eggroll.jpg"
    },
    { 
        name: "A12. FRIED CALAMARI", 
        category: "Appetizers", 
        price: "$13", 
        description: "Tender squid coated in crispy batter.",
        note: "",
        image: "assets/img/appetizers/a12-calamari.jpg"
    },
    { 
        name: "A5. SHRIMP SPRING ROLL (2)", 
        category: "Appetizers", 
        price: "$9", 
        description: "Lettuce, vermicelli noodles, shrimp.",
        note: "Related Dishes:\nA6. Shrimp & Pork Spring Roll / $9\nA7. Chicken Spring Roll / $9\nA9. Tofu Spring Roll / $9",
        image: "assets/img/appetizers/a5-shrimp-spring-roll.jpg"
    },

    // --- PHO ---
    { 
        name: "PHO KING SPECIAL", 
        category: "Pho", 
        price: "$26", 
        description: "Filet mignon, sirloin, brisket, tendon, tripe, rib, bone marrow.",
        note: "Related Dishes:\nP24. Combination Pho / $16.95\nP25. Pho Viet 101 Special / $17",
        image: "assets/img/pho/pho-king.jpg"
    },
    { 
        name: "P26. PHO TAI", 
        category: "Pho", 
        price: "$16.90", 
        description: "Traditional rare steak pho.",
        note: "Related Dishes:\nP28. Shrimp Pho / $16.90\nP29. Sirloin / $16.90\nP30. Sirloin & Brisket / $16.90\nP34. Veggie Tofu / $16.90\nP36. Seafood / $17.90\nP37. Meatball / $16.90",
        image: "assets/img/pho/p26-pho-tai.jpg"
    },
    { 
        name: "P27. CHICKEN PHO", 
        category: "Pho", 
        price: "$16.90", 
        description: "Chicken noodle soup.",
        note: "",
        image: "assets/img/pho/p27-pho-chicken.jpg"
    },

    // --- NOODLE DISHES ---
    { 
        name: "C2. SEAFOOD CHOWFUN", 
        category: "Noodle Dishes", 
        price: "$18", 
        description: "Shrimp, squid, imitation crab stir-fried with vegetables.",
        note: "",
        image: "assets/img/chowfun/c2-chowfun-seafood.jpg"
    },
    { 
        name: "C1. BEEF CHOWFUN", 
        category: "Noodle Dishes", 
        price: "$18", 
        description: "Beef stir-fried with vegetables.",
        note: "",
        image: "assets/img/chowfun/c1-chowfun-beef.jpg"
    },
    { 
        name: "M45. COMBINATION STIR FRY", 
        category: "Noodle Dishes", 
        price: "$18", 
        description: "Beef, chicken, shrimp stir fry.",
        note: "Related Dishes:\nM46. Stir Fry Egg Noodle Beef / $18\nM47. Stir Fry Egg Noodle Seafood / $18",
        image: "assets/img/chowfun/m45-combination-stir-fry.jpg"
    },
    { 
        name: "C3. PAD THAI CHICKEN", 
        category: "Noodle Dishes", 
        price: "$18", 
        description: "Chicken, bean sprouts, peanuts, onions.",
        note: "Related Dishes:\nPad Thai Beef / $18\nPad Thai Tofu / $18",
        image: "assets/img/chowfun/c3-chicken-padthai.jpg"
    },

    // --- RICE & VERMICELLI ---
    { 
        name: "C49. COMBINATION FRIED RICE", 
        category: "Rice Dishes", 
        price: "$18", 
        description: "Beef, chicken, shrimp, peas, carrot, egg.",
        note: "Related Dishes:\nC51. Seafood Fried Rice / $18\nC52. Chicken Fried Rice / $18\nC53. Beef Fried Rice / $18",
        image: "assets/img/vermicelli-friedrice/c49-combination-fried-rice.jpg"
    },
    { 
        name: "B70. VERMICELLI W/ GRILLED PORK & SHRIMP", 
        category: "Vermicelli Bowl", 
        price: "$18", 
        description: "Grilled pork & shrimp with vermicelli and eggroll.",
        note: "Related:\nB69. Grilled Pork / $17\nB71. Grilled Pork & Eggroll / $18",
        image: "assets/img/vermicelli-friedrice/b70-vermicelli-grilled-pork-shrimp.jpg"
    },
    { 
        name: "B73. VERMICELLI W/ GRILLED CHICKEN & EGGROLL", 
        category: "Vermicelli Bowl", 
        price: "$18", 
        description: "Grilled chicken with vermicelli and eggroll.",
        note: "Related:\nB72. Vermicelli W/ Grilled Chicken / $17\nB74. Lemongrass Chicken / $18\nB76. Lemongrass Beef / $18",
        image: "assets/img/vermicelli-friedrice/B73.jpg"
    },

    { 
        name: "C50. GRILLED PORK FRIED RICE", 
        category: "Rice Dishes", 
        price: "$18.50", 
        description: "Grilled pork, peas, carrot, egg, basil.",
        note: "",
        image: "assets/img/vermicelli-friedrice/c50-grilled-pork-fried-rice.jpg"
    },

    // --- SPECIAL RICE PLATES ---
    {
        name: "C67. VIETNAMESE SHAKING BEEF SPECIAL",
        category: "Rice Dishes",
        price: "$20",
        description: "Stir-fried filet mignon with vegetables.",
        note: "",
        image: "assets/img/rice-plate/c67-vietnamese-shaking-beef.jpg"
    },
    {
        name: "C4. SPECIAL STIR-FRIED BROCCOLI BEEF",
        category: "Rice Dishes",
        price: "$20",
        description: "Beef stir-fried with broccoli.",
        note: "",
        image: "assets/img/rice-plate/c4-broccoli-beef.jpg"
    },
    {
        name: "C58. SPECIAL 101 COMBINATION RICE PLATE",
        category: "Rice Dishes",
        price: "$18.50",
        description: "Pork chop, sausage, pork skin, egg cake, sunny egg.",
        note: "",
        image: "assets/img/rice-plate/C58.jpg"
    },
    {
        name: "C56. RICE PLATE",
        category: "Rice Dishes",
        price: "$18",
        description: "Grilled pork, eggroll, shrimp, sunny egg.",
        note: "Related:\nC55. Grilled Pork Chop / $16\nC65. Stir Fry Chicken Lemongrass / $18\nC68. Stir Fry Tofu Lemongrass / $18\nUpgrade Fried Rice / $3",
        image: "assets/img/rice-plate/c56-rice-plate.jpg"
    },
    {
        name: "C66. CHICKEN TERIYAKI PLATE",
        category: "Rice Dishes",
        price: "$18",
        description: "Grilled teriyaki chicken with rice & broccoli.",
        note: "",
        image: "assets/img/rice-plate/C66.jpg"
    },

    // --- DRINKS ---
    { 
        name: "T1. THAI ICE TEA", 
        category: "Beverages", 
        price: "$6", 
        description: "Thai iced tea.",
        note: "",
        image: "assets/img/drink/Thai Tea.PNG"
    },
    { 
        name: "MILK TEA", 
        category: "Beverages Tea", 
        price: "$6.50", 
        description: "Milk tea.",
        note: "",
        image: "assets/img/drink/Milk tea .PNG"
    },
    { 
        name: "STRAWBERRY FRUIT TEA", 
        category: "Beverages", 
        price: "$7", 
        description: "Strawberry flavored tea.",
        note: "",
        image: "assets/img/drink/Strawberries Fruit tea.PNG"
    },
    { 
        name: "PASSIONFRUIT FRUIT TEA", 
        category: "Beverages", 
        price: "$7", 
        description: "Passionfruit flavored tea.",
        note: "",
        image: "assets/img/drink/Passionfruit Tea.PNG"
    },
    { 
        name: "TARO SMOOTHIE", 
        category: "Beverages", 
        price: "$7.50", 
        description: "Taro smoothie.",
        note: "",
        image: "assets/img/drink/Taro smoothie.PNG"
    },
    { 
        name: "AVOCADO SMOOTHIE", 
        category: "Beverages", 
        price: "$7.50", 
        description: "Avocado smoothie.",
        note: "",
        image: "assets/img/drink/Avocado smoothie.PNG"
    },
    { 
        name: "MANGO SMOOTHIE", 
        category: "Beverages", 
        price: "$7.50", 
        description: "Mango smoothie.",
        note: "",
        image: "assets/img/drink/Mango smoothie.PNG"
    },
    { 
        name: "COCONUT SMOOTHIE", 
        category: "Beverages", 
        price: "$7.50", 
        description: "Coconut smoothie.",
        note: "",
        image: "assets/img/drink/Coconut smoothie.PNG"
    },
    { 
        name: "VIETNAMESE COOFFEE", 
        category: "Beverages", 
        price: "$6", 
        description: "Vietnamese iced coffee.",
        note: "",
        image: "assets/img/drink/Vietnamese coffee.PNG"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const dishDisplay = document.getElementById('dish-display');
    const menuItems = document.querySelectorAll('.menu-item');

    function createDishCard(dish) {
        // Sử dụng '\n' để tách các món liên quan
        const noteHtml = dish.note.split('\n').map(note => {
            return note.trim() ? `<p class="dish-note">${note}</p>` : '';
        }).join('');

        // Không hiển thị allergen
        const allergenHtml = ''; 

        return `
            <div class="dish-card" data-category="${dish.category}">
                <div class="dish-image-wrapper">
                    <img src="${dish.image}" alt="${dish.name}" onerror="this.onerror=null; this.src='assets/img/placeholder.jpg';">
                </div>
                <div class="dish-details">
                    <div class="dish-header">
                        <h3 class="dish-name">${dish.name}</h3>
                        <span class="dish-price">${dish.price}</span> 
                    </div>
                    <p class="dish-description">${dish.description}</p>
                    <div class="dish-footer">
                        ${noteHtml}
                        ${allergenHtml}
                    </div>
                </div>
            </div>
        `;
    }

    function renderDishes(dishes) {
        dishDisplay.innerHTML = ''; 
        
        if (dishes.length === 0) {
            dishDisplay.innerHTML = '<p class="text-center w-100">No dishes found in this category.</p>';
            return;
        }

        dishes.forEach(dish => {
            dishDisplay.innerHTML += createDishCard(dish);
        });
    }

    function filterDishes(category) {
        let filteredDishes = [];
        if (category === 'All Dishes') {
            filteredDishes = dishData;
        } else {
            filteredDishes = dishData.filter(dish => dish.category === category);
        }
        renderDishes(filteredDishes);
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            filterDishes(category);
        });
    });

    filterDishes('All Dishes'); 
});