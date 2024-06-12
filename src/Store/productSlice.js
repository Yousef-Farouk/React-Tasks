
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewProduct,getAllProducts,editProduct,deleteProduct } from "../Api/ProductApi";

export const getAllProductsAction = createAsyncThunk(
    "products/getAllProductsAction",
    async(_,thunkAPI)=>{

        const {rejectedWithValue} = thunkAPI;

        try{
            let response = await getAllProducts();

            return response.data
        }
        catch(error){
            return rejectedWithValue(error)
        }
    }

)


export const addNewProductAction = createAsyncThunk(
    "products/addNewProductAction",
    async(product,thunkAPI)=>{

        const {rejectedWithValue} = thunkAPI;

        try{
            let response  = await addNewProduct(product)

            return response.data
        }

        catch(error)
        {
            return rejectedWithValue(error)
        }
    }
)


export const updateNewProductAction = createAsyncThunk(
    "products/updateNewProductAction",
    async(product,thunkAPI)=>{

        const {rejectedWithValue} = thunkAPI;

        try{
            let response  = await editProduct(product.id,product)

            return response.data
        }

        catch(error)
        {
            return rejectedWithValue(error)
        }
    }
)

export const deleteNewProductAction = createAsyncThunk(
    "products/deleteNewProductAction",
    async(productid,thunkAPI)=>{

        const {rejectedWithValue} = thunkAPI;

        try{
            let response  = await deleteProduct(productid)

            return response.data
        }

        catch(error)
        {
            return rejectedWithValue(error)
        }
    }
)



const productSlice = createSlice({
    name: "products",
    initialState:{products:[],error:null,isLoading:false},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProductsAction.pending,(state,action)=>{
            state.isLoading = true
        })

        builder.addCase(getAllProductsAction.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.isLoading = false
        })

        builder.addCase(getAllProductsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

        builder.addCase(deleteNewProductAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = state.products.filter(item => item.id !== action.meta.arg);
        })
    }
})


export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;


// export const addNewProductAction = createAsyncThunk()