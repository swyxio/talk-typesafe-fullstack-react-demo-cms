/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  title: string,
  image: string,
  body: string,
};

export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  body?: string | null,
};

export type DeleteBlogInput = {
  id?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title: string,
      image: string,
      body: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog:  {
    __typename: "Blog",
    id: string,
    title: string,
    image: string,
    body: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
