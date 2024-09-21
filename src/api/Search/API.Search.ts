"use client";

import { categoryProps } from "@/types/Algo/Category";
import { exec } from "child_process";

export const APISearch = { 
    getCategories: async ( ): Promise<categoryProps[]> => {
        const categories =
        [
            {
                id: 0,
                title: "All",
                key: "uwg6dc",
            },
            {
                id: 1,
                title: "Images",
                key: "uwg6dd",
            },
            {
                id: 2,
                title: "Videos",
                key: "uwg6dq",
            },
            {
                id: 3,
                title: "News",
                key: "uwg6do",
            }
        ]

        return categories;
    },

    search: async ( query: string ) => {
        exec(`//wsl.localhost/Ubuntu-22.04/home/tomor/Code/Algobot/build ${query}`, ( error, stdout, stderr) => {
            if ( error ) {
                console.log("ERROR: ", stderr);
            } else {
                console.log("RESULTS :", stdout);
            }
        });
        alert("sadc");
    }
}
