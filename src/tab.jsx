import { useState } from "react";

const Menu = [
    {
        id:1, 
        title:"Orange Pudding Recipe", 
        src:"https://www.milkmaid.in/sites/default/files/2022-12/Orange-Delight-Pudding-335x300.jpg",
        content:"Soak the gelatin in orange juice and heat it over a pan of hot water until the gelatin dissolves. Let it cool and keep it aside. In a bowl, whip cream until it is light and fluffy (keep aside 3- 4 tbsp for decorating). Fold in Nestlé MILKMAID and add the gelatin mixture. Pour this into a wet mould and freeze. Unmould and serve decorated with oranges and whipped cream!", 
        
    },
    {
        id:2, 
        title:"Lemon Cheesecake", 
        src: "https://i.ytimg.com/vi/_GaKxt84z7o/maxresdefault.jpg",
        content:"Crush the biscuits finely, add melted butter and mix well. Press this onto a greased shallow glass dish/loose bottom pie dish and chill for 15 minutes in the refrigerator. Whisk the Nestlé MILKMAID and lime juice together until thick. Whip the cream till soft peaks form and fold into the Milkmaid mixture, gently mix till combined. Pour onto the chilled biscuit layer and swirl the green colour through the mixture to get a marbled effect. Freeze for 1-2 hours or until set.",
         
    },
    {
        id:3, 
        title:"Chocolate faces cookies",
        src: "https://www.milkmaid.in/sites/default/files/2020-08/Chocolate-Face-590x436.jpg",
        content:"Heat Nestlé MILKMAID, cocoa powder, and butter in a pan. Cook till the mixture starts leaving the sides of the pan. Remove from fire. Spread 1 tsp of this mixture onto each biscuit and leave to dry for 5 minutes. Divide the coconut powder into two equal portions and color one green and the other yellow.  Decorate each biscuit by making eyes with raisins, mouth with cashew halves, and hair with colored coconut powder.",
        color:"text-brown-600"
    },
    {
        id:4, 
        title:"Mawa Kheer",
        src: "https://i.ytimg.com/vi/8RzTpudETRg/maxresdefault.jpg",
        content:"In a bowl, mix Nestlé MILKMAID, milk, saffron and keep aside. In a pan, heat ½ tbsp ghee, fry the makhana for a minute and remove from pan. Cool and crush them. Heat the remaining ghee and fry all the dry fruits until golden brown. Add the crushed makhana, fried dry fruits to the Milkmaid - milk mixture (made in step 1) and boil this mixture. Simmer until it is thick and creamy. Add the elaichi powder, mix well and remove from flame. Serve hot or cold.",
        color:"text-brown-600"
    },
    {
        id:5, 
        title:"Chocolate Tower",
        src: "data:image/jpeg;base64,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",
        content:"Boil water and coffee powder to prepare a coffee liquor. To assemble, take 8 small bowls and make layers with the biscuits dipped in coffee liquor and Nestlé MILKMAID. Make five layers in each bowl leaving enough space on top for the Chocolate Butter Sauce. For Chocolate Butter Sauce: Combine Nestlé MILKMAID, coffee powder, butter and cocoa powder to make chocolate butter sauce. Spread this over the top biscuit layer. Decorate with walnuts and serve chilled!", 
        color:"text-brown-300"
    }


];

export default function Tab(){

    const [activeindex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => 
       activeindex === index ? className : '' ;


    return (
    <div className="flex flex-col space-y-4">
       <div className="bg-white flex justify-between items-center space-x-8 rounded-md px-4 py-2 w-full">
            {/*Tab List*/}
            {Menu.map((item) => (
                <button key={item.id} onClick={()=> handleClick(item.id)} className={`${checkActive(item.id, "bg-white px-2 py-1 rounded-md text-indigo-600" )}`
}>
                {item.title} 
                </button> 
                ))}
        </div>
        <div className="bg-white w-full rounded-md shadow-lg text-lg p-8 text-justify">
            {/*Tab Panel*/}
            {/*{Menu.map((item) => (
                <div key={item.id} className={`
${item.color} p-2 panel 
${checkActive(item.id,"active")}`
}>{item.content}</div>
            ))};*/} 
            {Menu.map((item) => (
                <div className={`${item.color} p-2 panel ${activeindex==item.id?"block": "hidden"}
`
}><img src={item.src} alt="" className="w-full h-[450px] object-fit border-solid border-2 pb-2" />
{item.content}
                
                </div>

            ))}
        </div>
  
    </div>

    );
    
  }
  