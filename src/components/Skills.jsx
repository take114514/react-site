import Circle from "react-circle";
import { requestStates } from "../constants";
import { useSkills } from '../customHooks/useSkills';

export const Skills = () =>{
    const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
    const[state,dispatch]=useReducer(skillReducer,initialState);
    useEffect(()=>{
        dispatch({type:actionTypes.fetch});
        axios.get('https://api.github.com/users/take114514/repos')
        .then((response)=>{
            const languageList = response.date.map(res=>res.language);
            const countedLanguageList = generateLanguageCountObj(languageList);
            dispatch({type:actionTypes.success,payload:{languageList:countedLanguageList}});
        })
        .catch(()=>{
            dispatch({type:actionTypes.error});
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

    const converseCountToPercentage = (count)=>{
        if (count > 10){return 100;}
        return count * 10;
    };

    const sortedLanguageList = () => (
        state.languageList.sort((firstLang, nextLang) =>  nextLang.count - firstLang.count)
      )

    return (
        <div id ="skills">
            <div className = "container">
                <div className = "heading">
                    <h2>Slills</h2>
                </div>
                <div className = "skills-container">
                    {
                    fetchRequestState === requestStates.loading && (
                       <p className = "description">取得中...</p>
                        )
                    }
         {
             fetchRequestState === requestStates.success && (
                sortedLanguageList().map((item, index) => (
                  <div className="skill-item" key={index}>
                  <p className="description"><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          } 
        {
                        fetchRequestState === requestStates.error && (
                            <p className="description">エラーが発生しました</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};