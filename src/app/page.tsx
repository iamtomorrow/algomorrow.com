"use client";

import Logo from "../../assets/Algo/images/logo.jpg";
import { Footer } from "@/components/Algo/Footer";

import Image from "next/image";

import "./page.css";
import { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { SearchContext } from "@/contexts/Algo/SearchContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [ searchQuery, setSearchQuery ] = useState<string>("");
  const router = useRouter( );

  const { query, updateQuery } = useContext( SearchContext );

  const updateContextAndNavigate = ( ) => {
    updateQuery( searchQuery );
    router.push("/search");
  }

  return (
    <div 
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div
      style={{
        width: "100%",
        height: "100vh"
      }}>
        <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>

          <div
          style={{
            width: "100%",
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            // backgroundColor: "green"
          }}>
            <Image 
              src={ Logo }
              alt="Algo Logo"
              width={1000}
              style={{
                width: 140,
              }}
            />
          </div>

          <div
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // background: "blue"
          }}>
            
            <form
            className="search-form--container">
              <input 
                style={{
                  height: "100%",
                  width: "100%",
                  paddingLeft: 20,
                  backgroundColor: "transparent"
                  // backgroundColor: "red"
                }}
                placeholder="Search the Web"
                value={ searchQuery }
                onChange={ (e) => {
                  e.preventDefault( );
                  setSearchQuery(e.target.value)
                } }
              />

              <button
              onClick={ (e) => {
                e.preventDefault( );
                setSearchQuery(prev => "");
              }}
              className={`${ searchQuery !== "" ? "search-form-clean-button--active" : "search-form-clean-button"}`}>
                <CgClose 
                  size={20}
                  color="#000000"
                />
              </button>
              <button
              onClick={ (e) => {
                e.preventDefault( );
                updateContextAndNavigate();
              }}
              className={`${ searchQuery !== "" ? "search-form-search-button--active" : "search-form-clean-button"}`}>
                {
                  query !== "" &&
                  <p
                  style={{
                    fontSize: 16,
                    color: "#ffffff",
                    marginRight: 3,
                  }}>Search</p>
                }
                <BiSearch 
                  size={20}
                  color="#ffffff"
                />
              </button>
            </form>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
