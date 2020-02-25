import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

export default function CitySearch() {
    const [address, setAddress] = React.useState("");
    const handleSelect = async value => {};

    return (
    <div>
        <PlacesAutocomplete 
        value={address} 
        onChange={setAddress} 
        onSelect = {handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({ placeholder: "City" })} />
                <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) => {
                    const style = {
                    backgroundColor: suggestion.active ? "#e0e0e0" : ""
                }
                    return (
                    <div {...getSuggestionItemProps(suggestion, { style})}>
                        {suggestion.description}
                        </div>
                    );
                })}
                
</div>
</div>
            )}

        </PlacesAutocomplete>
        
    </div>
    ) 
}