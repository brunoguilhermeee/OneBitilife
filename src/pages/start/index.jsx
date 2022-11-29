import React from "react";
import{ View, ScroolView, Text, Image, ScrollView} from "react-native";


export default function start(){

    return(
        <view>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <view>
                    <image source={require("../../../assets/icons/logo3.png")}></image>
                    <text>Vamos transformar</text>
                </view>


            </ScrollView>
        </view>

    )

    
    
        
   
        
}