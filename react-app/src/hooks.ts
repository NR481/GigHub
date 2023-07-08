import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppStore, RootState } from "./store";

type DispatchFunc = () => AppStore["dispatch"];

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
