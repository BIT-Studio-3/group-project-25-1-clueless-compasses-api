import express from "express";

const createRouter = (
  controller,
  validatePost,
  validatePut,
  authMiddleware = null
) => {
  const router = express.Router();

  const protect = (fn) => (authMiddleware ? [authMiddleware, fn] : [fn]);

  router.get("/", ...protect(controller.get));
  router.get("/:id", ...protect(controller.getById));
  router.post("/", ...protect(validatePost), controller.create);
  router.put("/:id", ...protect(validatePut), controller.update);
  router.delete("/:id", ...protect(controller.delete));

  return router;
};

export default createRouter;
