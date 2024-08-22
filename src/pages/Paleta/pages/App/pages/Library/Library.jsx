
import { RiSearchLine } from "react-icons/ri"
import "./Library.css"
import { useContext, useEffect, useState } from "react"
import { LibraryCard } from "../../components/LibraryCard/LibraryCard";
import { LibraryContext } from "../../../../contexts/LibraryContext";

export const PaletaAppLibrary = ( ) => {
    const [ query, setQuery ] = useState("");
    const [ library, setLibrary ] = useState([]);

    const LibraryContxt = useContext( LibraryContext );

    useEffect(( ) => {
        LibraryContxt.updateLibrary( );
    }, [ ]);

    return (
        <div className="paleta-app-library--container">

            <div className="paleta-app-library-body--container">
                <div className="paleta-app-library-header--container">
                    <div className="paleta-app-library-header">
                        <div className="paleta-app-library-search-bar--container">
                            <div className="paleta-app-library-search-bar">
                                <RiSearchLine 
                                    size={22}
                                    style={{
                                        color: "gray"
                                    }}
                                />
                                <input 
                                    value={ query }
                                    onChange={ (e) => setQuery(e.target.value) }
                                    className="paleta-app-library-search-input"
                                    placeholder="Pesquise por..."
                                />
                            </div>                            
                        </div>
                    </div>
                </div>

                <div className="paleta-app-library-body-main--container">
                    <div className="paleta-app-library-libraries--container">
                        {
                            LibraryContxt.library &&
                            LibraryContxt.library.map((item, index) => (
                                <LibraryCard 
                                    imageURL={ item.sample }
                                    path={""}
                                    title={ item.name }
                                    base={ item.base }
                                    key={`${index}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
