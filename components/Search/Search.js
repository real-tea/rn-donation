import React , { useRef } from "react";
import Style from "./style";
import { Pressable , TextInput } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Search = () => {
    const TextInputRef = useRef(null);
    const handleFocus = () => {
        TextInputRef.current.focus();
    }
    
    return(
        <Pressable style={Style.searchInputContainer} onPress = { handleFocus }>
            <FontAwesomeIcon icon={faSearch}/>
            <TextInput ref={TextInputRef} style = {Style.SearchInput} />
        </Pressable>
    )
}


export default Search;