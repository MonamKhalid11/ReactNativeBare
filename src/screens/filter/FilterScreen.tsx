import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { NavigationProp } from '@react-navigation/native';
import SearchBar from 'src/components/common/SearchBar'
import Heading from 'src/components/common/Heading'
import Details from 'src/components/common/Details'
import Separator from 'src/components/common/Separator';
import defaultStyles from 'src/styles/defaultStyles';
import { StackParamList } from 'src/nav/root/RootStack';
import { Routes } from 'src/common/routes';
import icons from 'assets/icons'
import { WP } from 'src/styles/responsiveStyles'
import { data } from 'src/yml'
import WorkOutItem from 'src/components/common/Workout'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import WeekDaysItem from 'src/components/common/Weekdays'
import SlotsItem from 'src/components/common/Slots'
import ClearButton from 'src/components/buttons/ClearButton';
import ButtonUnderLine from 'src/components/common/ButtonUnderline'

interface Props {
  navigation: NavigationProp<StackParamList, Routes.Filter>;
}
const FilterScreen: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const [typeOfWorkOut, setTypeOfWorkOut] = useState([])
  const [weekDays, setWeekDays] = useState([])
  const [timeOfDays, setTimeOfDays] = useState([])
  const [multiSliderValue, setMultiSliderValue] = React.useState([15, 36]);
  const multiSliderValuesChange = (values: React.SetStateAction<number[]>) => setMultiSliderValue(values);
  useEffect(() => {
    setTypeOfWorkOut(data.Workouts.typeofwork)
    setWeekDays(data.Days.daysOfWeeks)
    setTimeOfDays(data.Slots.timeOfDay)
    console.log('showing types of works', data.Days.daysOfWeeks)
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.searchAndFilterContainer}>
        <SearchBar
          containerStyle={styles.searchContianer}
          onChangeText={(text) => console.log(text)}
          placeholder={t('common:filter.searchPlaceHolder')}
        />
        <Image
          source={icons.filter}
          style={styles.filterIcon}
          resizeMode="contain"
        />
        <Image
          source={icons.like}
          style={styles.filterIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.paddingContainer}>
        <Heading
          heading={t('common:filter.Filters')}
        />
        <Details
          details={t('common:filter.FilterDetails')}
        />
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
        <Heading
          heading={t('common:filter.TypeOfWorkOut')}
        />
        {typeOfWorkOut && typeOfWorkOut.map((workouts) => {
          return (
            <WorkOutItem
              title={workouts.name}
              isChecked={workouts.isChecked}
              onPress={() => Alert.alert('sads')}
            />
          )
        })}
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
        <Heading
          heading={t('common:filter.PriceRange')}
        />
        <Details
          details={t('common:filter.average')}
        />
      </View>
      <View style={styles.paddingContainer}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={WP('90')}
          onValuesChange={multiSliderValuesChange}
          min={1.00}
          max={50.00}
          step={1}
          allowOverlap
          snapped
        />
        <View style={styles.sliderContainer}>
          <Text>USD ${multiSliderValue[0]}</Text>
          <Text>USD ${multiSliderValue[1]}</Text>
        </View>
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
        <View style={styles.weekContainer}>
          {weekDays && weekDays.map((day) => {
            return (
              <WeekDaysItem
                title={day.name}
                isSelected={day.isSelected}
                onPress={() => Alert.alert('hey')}
              />
            )
          })}
        </View>
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
        <Heading
          heading={t('common:filter.timeOfDay')}
        />
        <Details
          details={t('common:filter.average')}
        />
        <View style={styles.Slots}>
          {timeOfDays && timeOfDays.map((slot) => {
            return (
              <SlotsItem
                title={slot.time}
                timing={slot.dayTime}
                isSelected={slot.isSelected}
              />
            )
          })}
        </View>
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
        <View style={styles.cancelation}>
        <Details
          details={t('common:filter.OfferCancellation')}
        />
          <Image
            source={icons.box_filled}
            style={styles.box}
            resizeMode='contain'
          />
        </View>
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style={styles.paddingContainer}>
      <Details
          details={t('common:filter.CoachLanguage')}
        />
         <View style={styles.language}>
        <Details
          details={t('common:filter.English')}
        />
          <Image
            source={icons.box_empty}
            style={styles.box}
            resizeMode='contain'
          />
        </View>
        <View style = {styles.showAll}>
        <ButtonUnderLine
        title = {t('common:filter.ShowAll')}
        onPress = {()=>Alert.alert('dsd')}
        width = {WP('15')}
        />
        </View>
      </View>
      <Separator
        style={styles.seprator}
      />
      <View style ={styles.btnContainer}>
      <ButtonUnderLine
        title = {t('common:filter.ClearAll')}
        onPress = {()=>Alert.alert('dsd')}
        width = {WP('15')}
        />
      <ClearButton
          title={t('common:filter.APPLYFILTER')}
          buttonStyle = {styles.filterBtn}
          titleStyle = {styles.title}
        />

      </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // ...defaultStyles.screenPadding,
    paddingBottom: 50
  },
  searchAndFilterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  searchContianer: {
    width: WP('60')
  },
  filterIcon: {
    height: WP('10'),
    width: WP('10'),
  },
  seprator: {

  },
  paddingContainer: {
    display: 'flex',
    ...defaultStyles.screenPadding,
  },
  sliders: {
    paddingLeft: WP('5')
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weekContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: WP('80'),
    alignSelf:'center'
  },
  Slots: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: WP('90'),
    flexWrap: 'wrap',
    marginTop: WP('5')
  },
  cancelation: {
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  language: {
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:WP('4')
  },
  box: {
    height: WP('6'),
    width: WP('6')
},
btnContainer:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  padding:WP('5')
},
showAll:{
  paddingLeft:WP('4'),

},
filterBtn:{
  display:'flex',
  width:WP('50'),
  backgroundColor:'#D6343E',
  borderWidth:0
},
title:{
  color:"#fff"
}
});
export default FilterScreen;
