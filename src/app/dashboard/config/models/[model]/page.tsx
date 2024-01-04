"use client"
import { HttpResponse, http } from "msw"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Model() {
    const [data, setData] = useState<any[]>([])
    const router = useParams();

    useEffect(() => {
        (async () => {
            const users = http.get('https://api.example.com/user', () => {

                if (router.model === "User") {
                    return HttpResponse.json([{
                        firstName: 'John',
                        lastName: 'Maverick',
                    }, {
                        firstName: 'Jack',
                        lastName: 'John',
                    }])
                } else {
                    return HttpResponse.json([])
                }
            })
            // @ts-ignore
            setData(await users?.resolver()?.json())
        })();

    }, [router.model])

    return (
        <div>
            Model - User
            {data && data.map((item: any) => {
                return (
                    <div key={item.firstName}>
                        {item.firstName} {" "}
                        {item.lastName}
                    </div>
                )
            })}
        </div>
    )
}