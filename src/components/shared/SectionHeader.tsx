import React from 'react';
import {Button, Text, View, StyleSheet, ViewStyle} from 'react-native';
import {sizes, spacing} from '../../constants/theme';

  type SectionHeaderProps = {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: ViewStyle;
  onPress?: () => void;
  buttonTitle?: string;
}

const SectionHeader = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  buttonTitle = 'Button',
}: SectionHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {onPress && <Button title={buttonTitle} onPress={onPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default SectionHeader;
