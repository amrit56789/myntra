
export const CompanyDetails = () => {
    const points = [
        'Smart men’s clothing - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.',
        'Trendy women’s clothing - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.',
        'Fashionable footwear - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.',
        'Stylish accessories - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.',
        'Fun and frolic - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.',
        'Beauty begins here - You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.'

    ];
    return (
        <div className="company-details  text-zinc-400 max-sm:px-10 mt-6 text-sm">
            <div className="my-8">
                <h3 className="text-gray-600 font-bold">ONLINE SHOPPING MADE EASY AT MYNTRA
                </h3>
                <p className="text-zinc-400 mb-4 mt-2 leading-6">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
            </div>

            <div className="my-8">
                <h3 className="text-gray-600 font-bold">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
                </h3>
                <p className="text-zinc-400 mb-4 mt-2 leading-6">At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Myntra:</p>
                <ol className="list-decimal pl-8 text-gray-500">
                    {points.map((item, index) => (
                        <li key={index} className="my-4 text-zinc-400 leading-6 text-justify">{item}</li>
                    ))}
                </ol>
                <p className="text-zinc-400 mb-4 mt-2 leading-6 text-justify">
                    Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
                </p>
            </div>
            <div className="my-8">
                <h3 className="text-gray-600 font-bold">AFFORDABLE FASHION AT YOUR FINGERTIPS</h3>
                <p className="text-zinc-400 mb-4 mt-2 leading-6">Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
            </div>

            <div className="my-8">
                <h3 className="text-gray-600 font-bold">HISTORY OF MYNTRA
                </h3>
                <p className="text-zinc-400 mb-4 mt-2 leading-6 text-justify">Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>
                <p className="text-zinc-400 mb-4 mt-2 leading-6 text-justify">The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
            </div>

            <div className="my-8">
                <h3 className="text-gray-600 font-bold">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
                </h3>
                <p className="text-zinc-400 mb-4 mt-2 leading-6 text-justify">Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</p>
                <p className="text-zinc-400 mb-4 mt-2 leading-6 text-justify">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
            </div>

        </div>
    )
} 
