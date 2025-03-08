import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { useAuth } from '../../../utils/context/AuthContext';
import { HomeStyles } from './style';
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAllData, SearchLocation } from '../../../utils/api-call';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import CustomInput from '../../../components/form-utils/custom-input';
import { FormStyle } from '../../../utils/constant';
import { ms } from '../../../utils/helpers/metrics';

const HomeScreen = () => {
	const { logout, Token } = useAuth();
	const styless = HomeStyles
	const { control, handleSubmit, formState: { errors } } = useForm()
	const [vehicleList, setVehicleList] = useState([]);

	const LocationSearchBilder = (control) => {
		return [
			{
				name: 'form_location',
				parent: 'search_location',
				styles: FormStyle,
				type: "text",
				label: false,
				control: control,
			},
			{
				name: 'end_location',
				parent: 'search_location',
				styles: FormStyle,
				type: "text",
				label: false,
				control: control,
			},
		]
	}
	const UserSearchLocation = useMutation({
		mutationKey: ['user_search'],
		mutationFn: (data) => SearchLocation(data, Token),
		onSuccess: async (response) => {

			setVehicleList(response?.data || [])
		},
		onError: (error) => {
			console.error("Mutation Error:", error);
		}
	});

	console.log(UserSearchLocation?.data?.vehicle?.Auto?.vehicle_list)

	const OnSubmit = (data) => {
		console.log("fsdgsdf")
		UserSearchLocation.mutate(data)
	}

	return (
		<View style={styless.sa_container}>
			<View style={styless.sa_content} >
				{LocationSearchBilder(control).map((item, index) => {
					return <CustomInput key={index} {...item} />
				})}
			</View>
			<TouchableOpacity style={styless.sa_search_btn} onPress={handleSubmit(OnSubmit)}>
				<Text style={styless.sa_search_text}>Search</Text>
			</TouchableOpacity>
			{/* {
				vehicleList.vehicle.length > 0 ?
					<View style={{ gap: ms(10), marginTop: ms(20) }}>
						{
							vehicleList?.vehicle?.Auto?.vehicle_list?.map((item, index) => (
								<View key={index} style={styless.sa_logout_container}>
									<TouchableOpacity style={styless.sa_list_image_btn}>
										<View style={styless.sa_list_right}>
											<View style={styless.sa_list_image}>
												<Image source={require("../../../../assets/image/auto.png")} style={styless.sa_image} />
											</View>
											<View style={styless.sa_vehicle_details}>
												<Text style={styless.sa_vehicle_name}>{item?.name}</Text>
												<Text style={styless.sa_vehicle_number}>{item?.vehicle_number}</Text>
											</View>
										</View>
										<Text style={styless.sa_vehicle_type}>Non AC</Text>
									</TouchableOpacity>
								</View>
							))
						}
						{
							vehicleList?.vehicle?.Bus?.vehicle_list?.map((item, index) => (
								<View key={index} style={styless.sa_logout_container}>
									<TouchableOpacity style={styless.sa_list_image_btn}>
										<View style={styless.sa_list_right}>
											<View style={styless.sa_list_image}>
												<Image source={require("../../../../assets/image/bus_01.png")} style={styless.sa_image} />
											</View>
											<View style={styless.sa_vehicle_details}>
												<Text style={styless.sa_vehicle_name}>{item?.name}</Text>
												<Text style={styless.sa_vehicle_number}>{item?.vehicle_number}</Text>
											</View>
										</View>
										<Text style={styless.sa_vehicle_type}>Non AC</Text>
									</TouchableOpacity>
								</View>
							))
						}
					</View>
					: 
					<View style={styless.sa_notfound}>
						<Image source={require("../../../../assets/image/location_notfound.png")} style={styless.sa_image} />
					</View>
			} */}
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ gap: ms(10), marginTop: ms(20), flexGrow: 1 }}>
					{
						vehicleList?.vehicle?.Auto?.vehicle_list?.map((item, index) => (
							<View key={index} style={styless.sa_logout_container}>
								<TouchableOpacity style={styless.sa_list_image_btn}>
									<View style={styless.sa_list_right}>
										<View style={styless.sa_list_image}>
											<Image source={require("../../../../assets/image/auto.png")} style={{ width: "80%", height: "80%" }} />
										</View>
										<View style={styless.sa_vehicle_details}>
											<Text style={styless.sa_vehicle_name}>{item?.name}</Text>
											<Text style={styless.sa_vehicle_number}>{item?.vehicle_number}</Text>
										</View>
									</View>
									<Text style={styless.sa_vehicle_type}>Non AC</Text>
								</TouchableOpacity>
							</View>
						))
					}
					{
						vehicleList?.vehicle?.Bus?.vehicle_list?.map((item, index) => (
							<View key={index} style={styless.sa_logout_container}>
								<TouchableOpacity style={styless.sa_list_image_btn}>
									<View style={styless.sa_list_right}>
										<View style={styless.sa_list_image}>
											<Image source={require("../../../../assets/image/bus_01.png")} style={styless.sa_image} />
										</View>
										<View style={styless.sa_vehicle_details}>
											<Text style={styless.sa_vehicle_name}>{item?.name}</Text>
											<Text style={styless.sa_vehicle_number}>{item?.vehicle_number}</Text>
										</View>
									</View>
									<Text style={styless.sa_vehicle_type}>Non AC</Text>
								</TouchableOpacity>
							</View>
						))
					}
				</View>
			</ScrollView>
			<TouchableOpacity style={styless.sa_search_btn} onPress={() => logout()}>
				<Text style={styless.sa_search_text}>logout</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen


const Schema = yup.object().shape({
	form_location: yup.string()
		.required('form location is required'),
	end_location: yup.string()
		.required('end location is required'),

})