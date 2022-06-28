import { SmileyXEyes } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {

    const { slug } = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                { slug
                  ? <Video lessonSlug={slug}/>
                  : <div className="flex-1 flex flex-col items-center my-auto">   
                    <SmileyXEyes size={90} className="text-gray-600 " />                 
                    <p className="mt-3 text-gray-500 text-xl">                        
                        Você não escolheu nenhuma aula.
                    </p>
                </div> }
                <Sidebar />
                
            </main>
            
            <Footer />
        </div>
    )
}