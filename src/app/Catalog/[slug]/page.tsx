import ContextWrapper from "@/app/global/Context";
import { oneProductType, responseType } from "@/components/utils/ProductDataArrayAndTypes";
import ProductsDetail from "@/components/views/ProductsDetail";


// metadata genrator
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const product = await fetch(`https://lt4uzorl.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`).then((res: any) => res.json());
    const titleToSet: oneProductType = product.result.find((item: oneProductType) => item.slug.current == slug);

    return {
        title: titleToSet.productName,
        description: titleToSet.description,
    };
}



// fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
    let res = await fetch(`https://lt4uzorl.api.sanity.io/v2023-08-03/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%27${slug}%27%5D`)
    return res.json();
};



// will make static pages of every product
export async function generateStaticParams() {
    let res = await fetch(`https://lt4uzorl.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`, {
        next: {
            revalidate: 60
        }
    }).then((res: any) => res.json())
    return res.result.map((item: oneProductType) => { slug: item.slug });
};


const Catalog = async ({ params }: { params: { slug: string } }) => {
    let data: responseType = await fetchPreviewData(params.slug)
    return (
        <ContextWrapper>
            <ProductsDetail item={data.result[0]} />
        </ContextWrapper>
    )
}

export default Catalog