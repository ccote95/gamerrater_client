export const CreateForm = () => {
    

    return(
        <div>
            <form>
                <fieldset>
                    <label>Game Title</label>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <label>Category</label>
                    <select name="categories"></select>
                </fieldset>
                <fieldset>
                    <label>Designer</label>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <label>Year Released</label>
                    <input type="date"/>
                </fieldset>
                <fieldset>
                    <label>Number of Players</label>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <label>Estimated Play Time</label>
                    <input type="text"/>
                </fieldset>
                <fieldset>
                    <label>Age Recommendation</label>
                    <input type="text"/>
                </fieldset>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}