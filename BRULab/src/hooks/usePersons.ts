import { useTypedSelector } from "./useTypedSelector";

export const usePersons = () => {
    const persons = useTypedSelector((state) => state.persons);

    return { persons };
};
