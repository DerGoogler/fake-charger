#include <jni.h>
#include <iostream>
#include <stdexcept>
#include <cstdio>
#include <string>
#include <sstream>

void addToStream(std::ostringstream &) {
}

template<typename T, typename... Args>
void addToStream(std::ostringstream &a_stream, T &&a_value, Args &&... a_args) {
    a_stream << std::forward<T>(a_value);
    addToStream(a_stream, std::forward<Args>(a_args)...);
}

template<typename... Args>
std::string concat(Args &&... a_args) {
    std::ostringstream s;
    addToStream(s, std::forward<Args>(a_args)...);
    return s.str();
}


int exec(const char *cmd) {
    char buffer[128];
    std::string result = "";
    FILE *pipe = popen(concat("su -c ", cmd).c_str(), "r");
    if (!pipe) throw std::runtime_error("popen() failed!");
    try {
        while (fgets(buffer, sizeof buffer, pipe) != nullptr) {
            result += buffer;
            return 1;
        }
    } catch (...) {
        pclose(pipe);
        throw;
    }
    pclose(pipe);
    return 1;
}

std::string ConvertJString(JNIEnv *env, jstring str) {
    if (!str) std::string();

    const jsize len = env->GetStringUTFLength(str);
    const char *strChars = env->GetStringUTFChars(str, (jboolean *) 0);

    std::string Result(strChars, len);

    env->ReleaseStringUTFChars(str, strChars);

    return Result;
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_fakecharger_Lib_test(JNIEnv *env, jclass clazz) {
	// TODO: implement test()
    return nullptr;
}

extern "C"
JNIEXPORT jobject JNICALL
Java_com_dergoogler_fakecharger_Lib_exec(JNIEnv *env, jclass clazz, jstring command) {
    std::string _command_ = ConvertJString(env, command);
    exec(_command_.c_str());
    return nullptr;
}