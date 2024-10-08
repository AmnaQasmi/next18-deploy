import { client } from "@/lib/sanityClient"
import { urlForImage } from "../../sanity/lib/image";

export const getProductData = async () => {
    const res = await client.fetch(`*[_type == "Product"][2]`);
    return res;
}

export default async function BrandAmmbasador() {
    const data = await getProductData();
    return (
        <div className="flex justify-center gap-x-2 py-5">
            {data.map((item: any) => (
                <div key={item._id} className="lg:pt-5 md:pt-3 pt-2 bg-[#adb3b8] border rounded-sm border-x-[1px]">
                    <div>
                        <img
                            height={300}
                            width={400}
                            className="max-h-[850px] object-cover"
                            src={urlForImage(item.image).url()}
                            alt="Image Of BrandAmmbasador"
                        />
                    </div>
                    <h2 className="py-4">{item.title}</h2>
                </div>
            ))}
        </div>
    );
}
