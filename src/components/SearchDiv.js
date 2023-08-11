import React from "react";
const SearchDiv = () => {
    return (
        <>
                <form className="row row-cols-lg-auto g-3 align-items-center">
                    <div class="mb-3 p-3 ">
                        <label for="exampleInputEmail1" class="form-label">Search</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" class="btn btn-dark mt-4 p-2 w-25">Submit</button>
                </form>
        </>
    );
}
export default SearchDiv;