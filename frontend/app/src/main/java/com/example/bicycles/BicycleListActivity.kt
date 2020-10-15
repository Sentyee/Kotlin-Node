package com.example.bicycles

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.bicycles.models.Bicycle

class BicycleListActivity : AppCompatActivity() {
    lateinit var bicycles: ArrayList<Bicycle>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_bicycle_list)

        getAllBicycles()
    }

    private fun getAllBicycles(){
        bicycles = ArrayList(Bicycle)

        bicycles.add(Bicycle("BH","Star"))
        bicycles.add(Bicycle("BMX","Mountain Master"))
    }
}