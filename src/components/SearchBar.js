import {Divider, Input} from "antd";

function SearchBar(props) {
    return (
        <div>
            <Divider>Search Product</Divider>
            <Input type="text" onChange={props.handleSearch}/>
        </div>
    );
}

export default SearchBar;