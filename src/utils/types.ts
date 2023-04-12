export type TUserData<TUser> = {
  auth: {
    isAuth: boolean;
    user: TUser;
  };
};

export type TUser = {
  email: string;
  name: string;
  accessToken: string;
};

export type TForm = {
  [name: string]: string;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  count: number;
  uuid?: string;
}

export type TModalStore = {
  modal: {
    isRequest: boolean;
    isFailed: boolean;
    currentModal: JSX.Element;
    resetActionType: string;
  }
}