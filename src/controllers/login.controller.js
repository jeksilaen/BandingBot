const loginService = require("../services/login.service");
let refTokens = require("../../refTokens");
const query = require("../dist/db.service");
const jwt = require("jsonwebtoken");

const { createAccToken, createRefToken } = require("../utils/createToken");

function get(req, res, next) {
  try {
    return res.render("login");
  } catch (error) {
    console.error("Error while delivering login page!");
    return next(error);
  }
}

async function post(req, res, next) {
  try {
    const result = await query.loginUser(req.body);

    if (result) {
      const user = loginService.authUser(
        result.fName,
        req.body.password,
        result.password
      );

      if (user) {
        refTokens.push(user.refToken);

        res.cookie("jwtAcc", user.accToken, {
          httpOnly: true,
          maxAge: user.maxAge * 1000,
        });

        res.cookie("jwtRef", user.refToken, { httpOnly: true });

        res.redirect("/");
      } else {
        console.log("Authentication failed!");
        return res.redirect("/login");
      }
    } else {
      console.log("User does not exist!");
      return res.redirect("/login");
    }
  } catch (error) {
    console.error("Error while trying to log in user!");
    next(error);
  }
}

function logout(req, res, next) {
  try {
    res.cookie("jwtAcc", "", {
      maxAge: 1,
    });

    res.cookie("jwtRef", "", {
      maxAge: 1,
    });

    res.cookie("dataTokped", "", {
      maxAge: 1,
    });
    res.cookie("dataLazada", "", {
      maxAge: 1,
    });
    res.cookie("dataShopee", "", {
      maxAge: 1,
    });
    res.cookie("dataBukalapak", "", {
      maxAge: 1,
    });
    res.cookie("linkData", "", {
      maxAge: 1,
    });

    refTokens = refTokens.filter((token) => token !== req.cookies.jwtRef);

    res.locals.user = null;
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
}

function refreshToken(req, res, next) {
  try {
    if (refTokens.includes(req.cookies.jwtRef)) {
      jwt.verify(
        req.cookies.jwtRef,
        process.env.TOKEN_KEY,
        (err, decodedToken) => {
          if (err) {
            console.log("Request denied!");
            console.error(err.message);

            return res.redirect("/login");
          } else {
            console.log("Request accepted!");

            maxAge = 15;
            const accToken = createAccToken({ id: decodedToken.id }, maxAge);

            res.cookie("jwtAcc", accToken, {
              httpOnly: true,
              maxAge: maxAge * 1000,
            });

            res.redirect("/");
          }
        }
      );
    } else {
      console.log("Refresh token not found");
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Error while trying to log in user!");
    next(error);
  }
}

module.exports = {
  get,
  post,
  logout,
  refreshToken,
};
