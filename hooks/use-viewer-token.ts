import {useEffect, useState} from "react";
import {toast} from "sonner";
import {createViewerToken} from "@/actions/token";
import {jwtDecode, JwtPayload} from "jwt-decode";

export const useViewerToken = (hostIdentity: string) => {
    const [token , setToken] = useState("");
    const [name , setName] = useState("");
    const [identity , setIdentity] = useState("");

    useEffect(() => {
        const createToken = async () => {
            try {
                const viewerToekn = await createViewerToken(hostIdentity);
                setToken(viewerToekn);

                const decodedToken = jwtDecode(viewerToekn) as JwtPayload & {name?: string};

                const name = decodedToken?.name;
                const identity = decodedToken?.jti;

                if (identity && name) {
                    setIdentity(identity);
                    setName(name);
                }
            } catch (error) {
                toast.success("Error creating token");
            }
        }

        createToken()
    }, [hostIdentity]);

    return {token, name, identity};
}