
export const CompanyDetails = () => {
    const points = [
        'Opt for a charming yet laid-back look with cool T-shirts and casual shirts worn with stylish jeans, casual trousers or shorts. Stay sharp and sophisticated with our smart options in formal shirts and trousers. Look dapper when meeting your clients in our smooth suits. Put on trendy blazers for formal occasions. On your online men’s clothes’ shopping journey, make sure you include kurtas, jackets and sherwanis from our festive wear collection. Stay warm and comfortable in sweaters and sweatshirts. Get fit and ready for adventure, with our sports and active wear collection.',
        'Once you are done with your online men’s clothes’ shopping, make sure you pick up the right accessories to complement your look. Whether you are travelling to work or outside the city our wide variety of bags, backpacks and luggage collection will ensure you are well-packed. Our beautiful watches and smart watches work well to enhance your overall style quotient. Reach out for our sunglasses during the summers – let your eyes stay protected while you opt for maximum swag.',
        'Bring impeccable style to your shoe closet with our incredible collection of footwear for men. Look classy during formal and semi-formal occasions with derbies, loafers and oxfords. Stay hip and happening in parties with boat shoes, monks and brogues from our casual men’s footwear range. Lead an active lifestyle with sneakers and running shoes from our sports footwear selection. Pick up sandals, floaters and flip-flops for a trip to the beach. We also host socks in our men’s online shopping collection. That’s basically everything under one roof!',
    ];
    return (
        <div className=" md:px-28 max-sm:px-10 mt-6 text-sm">
            <div className="my-8">
                <h3 className="text-gray-600 font-bold">MEN’S SHOPPING AT MYNTRA: A SUPERIOR EXPERIENCE</h3>
                <p className="text-gray-500 mb-4 mt-2">Myntra is one of the best sites when it comes to online shopping for men. The finest of material, superior design and unbeatable style go into the making of our men’s shopping collection. Our range of online shopping men’s wear, accessories, footwear and personal care products are second to none. Compared with other men’s shopping sites, Myntra brings you the best price products which won’t hurt your pocket. With seasonal discounts on trendy casual wear, suits, blazers, sneakers and more, online shopping for men at Myntra just gets even more irresistible!</p>
            </div>

            <div className="my-8">
                <h3 className="text-gray-600 font-bold">ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</h3>
                <p className="text-gray-500 mb-4 mt-2">At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Myntra:</p>
                <ul className="list-disc list-inside pl-8 text-gray-500">
                    {points.map((item, index) => (
                        <li key={index} className="my-4">{item}</li>
                    ))}
                </ul>
                <p className="text-gray-500 mb-4 mt-2">
                Make sure you check out fun printed men’s T-shirts featuring your favourite characters from DC Comics and Marvel studios. Relive the magic of your favourite superhero from Justice League. Fly high with Superman, battle the bad guys with Batman, or get trendy in lightning-speed with a Flash T-shirt. Grab our cool Marvel Avengers T-shirts. Stay powered up with the Iron Man, or walk with the warriors in a Thor T-shirt.
                </p>
                <p className="text-gray-500 mb-4 mt-2">Our online shopping fashion for mens collection includes even more amazing merchandise such as innerwear, sleepwear, track pants, personal care, wallets, belts and other fashion accessories.</p>
            </div>

            <div className="my-8">
                <h3 className="text-gray-600 font-bold">MEN’S SHOPPING MADE EASY AT MYNTRA</h3>
                <p className="text-gray-500 mb-4 mt-2">Myntra is the most convenient men’s online store, what with our simplified shopping and payment procedures. With just a few clicks of the mouse or taps on your smartphone, you can buy your favorites from the best men’s brands right away.</p>
            </div>
        </div>
    )
} 
