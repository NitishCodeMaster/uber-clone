import React, { useState } from "react";

export const userDataContext = React.createContext(null);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        fullname: { firstname: "", lastname: "" },
    });

    return (
        <userDataContext.Provider value={{ user, setUser }}>
            {children}
        </userDataContext.Provider>
    );
};

export default UserContext;
