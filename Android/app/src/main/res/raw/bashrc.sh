#!/system/bin/sh

grep_prop() {
  REGEX="s/^$1=//p"
  shift
  FILES=$@
  [ -z "$FILES" ] && FILES='/system/build.prop'
  sed -n "$REGEX" $FILES 2>/dev/null | head -n 1
}

api_level_arch_detect() {
  API=`grep_prop ro.build.version.sdk`
  ABI=`grep_prop ro.product.cpu.abi | cut -c-3`
  ABI2=`grep_prop ro.product.cpu.abi2 | cut -c-3`
  ABILONG=`grep_prop ro.product.cpu.abi`

  ARCH=arm
  IS64BIT=false
  if [ "$ABI" = "x86" ]; then ARCH=x86; fi;
  if [ "$ABI2" = "x86" ]; then ARCH=x86; fi;
  if [ "$ABILONG" = "arm64-v8a" ]; then ARCH=arm64; IS64BIT=true; fi;
  if [ "$ABILONG" = "x86_64" ]; then ARCH=x64; IS64BIT=true; fi;
}

test_sync() {
  api_level_arch_detect
  echo "Device API: $API"
  echo "Device ABI: $ARCH"
}

test_async() {
  for i in 0 1 2 3 4 5 6 7 8 9; do
    echo ${i}
    sleep 1
  done
}

setBattery() {
  cmd battery set level $@
}

resetBattery() {
  cmd battery reset $@
}

unplugBattery() {
  cmd battery unplug $@
}

fakecharger() {
   while getopts "s:hm:a:r" opt
   do
      case "$opt" in
         s ) _maxspeed_="$OPTARG" ;;
         m ) _maxcharge_="$OPTARG" ;;
         a ) _maxadd_="$OPTARG" ;;
      esac
   done

   MAXSPEED="${_maxspeed_:=0.3}"
   MAXCHARGE="${_maxcharge_:=100}"
   MAXADD="${_maxadd_:=1}"

   i=1
   while [ $i -le $MAXCHARGE ]
   do
      setBattery $i
      sleep $MAXSPEED
      i=$(($i+$MAXADD))
   done

   sleep 2
   resetBattery -f
   exit 1
}

vibratorForSamsung() {
  cmd vibrator vibrate $@
}

cancelSamsungVibrator() {
  cmd vibrator cancel
}

vibratorForAOSP() {
  cmd vibrator_manager synced oneshot $@
}

cancelAOSPVibrator() {
  cmd vibrator_manager cancel
}