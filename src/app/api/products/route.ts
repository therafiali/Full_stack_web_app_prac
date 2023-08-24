import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const orignalData: Array<oneProductType> = [];
    const url = request.nextUrl.searchParams;

    let res = await fetch(`https://lt4uzorl.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);
    let dataFrom_APi = await res.json();
    orignalData.push(...dataFrom_APi.result)

    if (url.has("start") || url.has("end")) {
        if (orignalData[Number(url.get("start"))]) {
            let productArray = orignalData.slice(Number(url.get("start")), Number(url.get("end")))
            return NextResponse.json({ productArray })
        }
        return NextResponse.json({ productArray: "Not found" })

    }

    return NextResponse.json({ orignalData })
};




        // let response = await client.fetch(`*[_type == "products"]`);
        // return NextResponse.json({ response })