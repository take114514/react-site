import { useEffect,useState } from "react";
import axios from "axios";

export const Skills = () =>{
    const[languageList,setLanguagelist]=useState([]);
    console.log(languageList);

    useEffect(()=>{
        axios.get('https://api.github.com/users/take114514/repos')
        .then((response)=>{
            // プログッラミング言語のデータを取得
            const languageList = response.data.map(res=>res.language);
            const contentedLanguageList = generateLanguageCountObj(languageList);
            setLanguagelist(contentedLanguageList);
        });
    },[]);

    const generateLanguageCountObj=(allLanguageList)=>{
        const notNullLanguageList = allLanguageList.filter(language=>language!=null);
        const uniqueLanguageList = [...new Set(notNullLanguageList)];

        return uniqueLanguageList.map(item=>{
            return {
                language:item,
                count:allLanguageList.filter(language=>language===item).length
            }
        });
    };

    return (
        <div id ="skills">
            <div className = "container">
                <div className = "heading">
                    <h2>Slills</h2>
                </div>
                <div className = "skills-container">
                </div>
            </div>
        </div>
    );
};