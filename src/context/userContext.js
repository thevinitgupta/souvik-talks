//1. importing various dependencies
import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";

//2. Initializing context for authentication
export const AuthContext = React.createContext();

//3. Setting up authentication provider which will provide the state to the various components of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};


/**
 * 
 * 
 * user : {
 *      A: []
Fa: undefined
G: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM"
I: true
Ib: Bk {A: Array(0), G: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM", o: "[DEFAULT]", w: "souviktalks-2021.firebaseapp.com", c: Ch, …}
N: [ƒ]
R: []
Ra: null
U: ƒ ()
V: ul {l: false, app: FirebaseAppImpl, c: Ch, N: Array(0), m: Array(1), …}
W: ul {l: false, app: FirebaseAppImpl, c: Ch, N: Array(0), m: Array(1), …}
a: Uj {v: "souviktalks-2021.firebaseapp.com", l: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM", u: "[DEFAULT]", h: Array(2), f: false, …}
c: Ch {b: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM", i: "https://securetoken.googleapis.com/v1/token", l: $f, c: {…}, g: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", …}
ca: jl {a: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM:[DEFAULT]", b: pj}
displayName: "Vinit Gupta"
email: "vinitman35@gmail.com"
emailVerified: true
h: tk {f: Ch, a: "AGEhc0AI_Mt_Baq7wg-blEXj4u4-aQUj9yCpl5ZlTHjofHitWO…VLfydXyEk5qyMB8IBhKayzKaJGtfrbJrn1Y0NkGr6Hv87T-Y8", b: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOG…B3VThjVSkpm-DqMzGdRmWZeKbF6AfLzlFxqcpC4AUDPIXolXg", c: 1625758998196}
ha: null
i: null
isAnonymous: false
l: pk {c: 30000, f: 960000, h: ƒ, i: ƒ, g: ƒ, …}
metadata: xk {a: "1625669125144", b: "1625755401074", lastSignInTime: "Thu, 08 Jul 2021 14:43:21 GMT", creationTime: "Wed, 07 Jul 2021 14:45:25 GMT"}
o: "[DEFAULT]"
oa: false
pa: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOGJlN2NjZDdjYjI2NGRmNmVhMzgzYzQ5YWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmluaXQgR3VwdGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2ptSVZUOEprT2EtNnVPbFRyQk1heXlxeVprdGdqM0hoMHdEWWlFSHRVPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NvdXZpa3RhbGtzLTIwMjEiLCJhdWQiOiJzb3V2aWt0YWxrcy0yMDIxIiwiYXV0aF90aW1lIjoxNjI1NzU1NDAxLCJ1c2VyX2lkIjoiVWY1R0VSQ25Zb04ydktVQXFoMUhPZHBNRGdCMiIsInN1YiI6IlVmNUdFUkNuWW9OMnZLVUFxaDFIT2RwTURnQjIiLCJpYXQiOjE2MjU3NTU0MDEsImV4cCI6MTYyNTc1OTAwMSwiZW1haWwiOiJ2aW5pdG1hbjM1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAzNDAwMDg2OTg1MDUyOTE0MTMwIl0sImVtYWlsIjpbInZpbml0bWFuMzVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.iW5r-TnBe4mk_I4Mu03AO7W5MIaQU_ki8cRyuyiG-rWc4S5YTJNeAJx98Lo9cimzQ2QLBYVXX-v5f2-H8-6CkeX7kFZgIJWS-USraCNiCzyNRHyI-z8eaTg0B6E6pau5yZlnNqerH0ataEU20Xt3Og94--p1EzdL5WCeobXjCZJzvybJAt_Bw053rImsm3xL46Ovx1QHC14HIsqGEbcK8CeNSqVBNTfHUjgs-3ZxObbSpf-CenQP4gZmFBUvpv5h22yj9lUFARNdg3QqCiNJB10pUrfOBPAOHjBLEB3VThjVSkpm-DqMzGdRmWZeKbF6AfLzlFxqcpC4AUDPIXolXg"
phoneNumber: null
photoURL: "https://lh3.googleusercontent.com/a-/AOh14GjmIVT8JkOa-6uOlTrBMayyqyZktgj3Hh0wDYiEHtU=s96-c"
providerData: [{…}]
qa: ƒ (a)
ra: ƒ (a)
refreshToken: "AGEhc0AI_Mt_Baq7wg-blEXj4u4-aQUj9yCpl5ZlTHjofHitWOuybiDHst7hXfqZdDJqFHw28_Dt-RDENC_fQFkn4FdjQqJ-xHCYKVCM_D47fGj_fKFvDN6uJ9PRAfg64VsjZR7HA8KgApvxPO1KgKIKzQ8F60JxDHU4L3vH89sPDIQAFdJoBMLSqyitGEuCpy2qyNuHa7UtMDeowiyDV1RcIPGG1FT82KpDyMLihq9xo5Q17ibxBUpRabci7-wolOC1LL4hnuyfsbNw1JidCfgMr66b1O0lae5ygUWRbpUjYyVhx2QxoYxo-Kiz650GpCFWa4CsjDrT_O3FLuDVMBl6ncbWtpHXSvljJYEAalQNE0yKlEkL93F6hKuGRxrYEIixW9VLfydXyEk5qyMB8IBhKayzKaJGtfrbJrn1Y0NkGr6Hv87T-Y8"
u: Wc {src: Bk, a: {…}, b: 3}
*!uid: "Uf5GERCnYoN2vKUAqh1HOdpMDgB2"
w: "souviktalks-2021.firebaseapp.com"
_lat: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOGJlN2NjZDdjYjI2NGRmNmVhMzgzYzQ5YWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmluaXQgR3VwdGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2ptSVZUOEprT2EtNnVPbFRyQk1heXlxeVprdGdqM0hoMHdEWWlFSHRVPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NvdXZpa3RhbGtzLTIwMjEiLCJhdWQiOiJzb3V2aWt0YWxrcy0yMDIxIiwiYXV0aF90aW1lIjoxNjI1NzU1NDAxLCJ1c2VyX2lkIjoiVWY1R0VSQ25Zb04ydktVQXFoMUhPZHBNRGdCMiIsInN1YiI6IlVmNUdFUkNuWW9OMnZLVUFxaDFIT2RwTURnQjIiLCJpYXQiOjE2MjU3NTU0MDEsImV4cCI6MTYyNTc1OTAwMSwiZW1haWwiOiJ2aW5pdG1hbjM1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAzNDAwMDg2OTg1MDUyOTE0MTMwIl0sImVtYWlsIjpbInZpbml0bWFuMzVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.iW5r-TnBe4mk_I4Mu03AO7W5MIaQU_ki8cRyuyiG-rWc4S5YTJNeAJx98Lo9cimzQ2QLBYVXX-v5f2-H8-6CkeX7kFZgIJWS-USraCNiCzyNRHyI-z8eaTg0B6E6pau5yZlnNqerH0ataEU20Xt3Og94--p1EzdL5WCeobXjCZJzvybJAt_Bw053rImsm3xL46Ovx1QHC14HIsqGEbcK8CeNSqVBNTfHUjgs-3ZxObbSpf-CenQP4gZmFBUvpv5h22yj9lUFARNdg3QqCiNJB10pUrfOBPAOHjBLEB3VThjVSkpm-DqMzGdRmWZeKbF6AfLzlFxqcpC4AUDPIXolXg"
__proto__: F
 * }
 */
