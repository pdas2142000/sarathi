/**React imports */
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

/** Liabary*/
import { useMutation } from "@tanstack/react-query";
import { useForm } from 'react-hook-form'

/**Local imports*/
import { useAuth } from '../../../utils/context/AuthContext';
import { SearchLocation } from '../../../utils/api-call';
import { ms } from '../../../utils/helpers/metrics';

/**Styles*/
import { HomeStyles } from './style';
import { FormStyle } from '../../../utils/constant';

/**Components */
import CustomInput from '../../../components/form-utils/custom-input';

/**Main export*/
const HomeScreen = () => {
	const { Token } = useAuth();
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
				<View style={{ gap: ms(10), marginTop: ms(20),}}>
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
		</View>
	)
}

export default HomeScreen
