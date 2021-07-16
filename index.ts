import Router, { RouterContext } from "@koa/router";
import { DefaultContext, DefaultState } from "koa";

function getRoot(ctx: RouterContext<DefaultState, DefaultContext>) {}

// This causes error
const router = new Router() as Router<DefaultState, DefaultContext>;

// This does not
//const router = new Router<DefaultState, DefaultContext>();

router.get("/", getRoot);
